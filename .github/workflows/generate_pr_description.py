#!/usr/bin/env python3
"""
Generates a PR description using Gemini, Anthropic, or OpenAI APIs.
Dynamically detects configured keys and falls back across models/providers.
"""
import os
import json
import time
import urllib.request
import urllib.error

# Retrieve API Keys
gemini_key    = os.environ.get("GEMINI_API_KEY")
anthropic_key = os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("CLAUDE_API_KEY")
openai_key    = os.environ.get("OPENAI_API_KEY")

pr_title = os.environ.get("PR_TITLE", "")
branch   = os.environ.get("PR_BRANCH", "")
base     = os.environ.get("PR_BASE", "")
files    = os.environ.get("PR_FILES", "")

with open("/tmp/pr_diff.txt", "r", errors="replace") as f:
    diff = f.read()

# Read the repository PR template
template_path = ".github/pull_request_template.md"
if os.path.exists(template_path):
    with open(template_path, "r", encoding="utf-8") as f:
        template = f.read()
else:
    # Fallback to hardcoded template if the file is missing
    template = """# [emoji] [Descriptive Title]

## 📝 Description
- **Changed:** 
- **Why:** 
- **Approach:** 

## 💡 Type of Change
- [ ] ✨ `feat` — New feature (non-breaking)
- [ ] 🐛 `fix` — Bug fix (non-breaking)
- [ ] ♻️ `refactor` — Code restructure (no behavior change)
- [ ] 📚 `docs` — Documentation update
- [ ] 🔧 `chore` — Maintenance / dependencies
- [ ] 🏗️ `ci` — Build/CI pipeline change
- [ ] 💥 `breaking` — Breaking change (existing functionality affected)

## 🖼️ Screenshots / Recordings
N/A

## ✅ Review Checklist
- [ ] 🧐 Code follows SOLID principles and workspace standards
- [ ] 🔍 Self-reviewed — no debug logs, commented-out code, or TODOs left in
- [ ] 🎨 UI changes queried through `ui-ux-pro-max` design system
- [ ] 🧪 Tests added or updated — all passing locally
- [ ] 📖 Documentation updated (if applicable)
- [ ] 🚦 No new linting warnings or TypeScript errors
- [ ] 🔒 No secrets or credentials committed

## 🔗 Related
- Closes: #
- Refs: """

prompt = f"""You are a senior developer writing a GitHub Pull Request description.
Generate a professional, detailed PR description by filling in the template below.

CRITICAL INSTRUCTIONS:
1. You MUST keep the EXACT structure and all headers from the template. Do not delete any headers or sections.
2. Under "Type of Change", auto-check the correct checkbox by replacing '- [ ]' with '- [x]' for the matching type based on the diff. Leave other boxes unchecked as '- [ ]'.
3. Under "Review Checklist", leave the checkboxes as '- [ ]' (do not check them).
4. Fill in the "Description" details accurately using the provided git diff.
5. Do NOT include markdown code blocks wrapping the entire response. Start directly with the title '#'.

Branch: {branch} -> {base}
Title: {pr_title}
Changed files: {files}
Diff (may be truncated):
{diff}

--- TEMPLATE TO FILL IN ---
{template}
--------------------------"""

def try_gemini(model, key):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.3, "maxOutputTokens": 2048}
    }).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    return data["candidates"][0]["content"]["parts"][0]["text"].strip()

def try_anthropic(model, key):
    url = "https://api.anthropic.com/v1/messages"
    payload = json.dumps({
        "model": model,
        "max_tokens": 2048,
        "temperature": 0.3,
        "messages": [{"role": "user", "content": prompt}]
    }).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers={
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01"
    })
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    return data["content"][0]["text"].strip()

def try_openai(model, key):
    url = "https://api.openai.com/v1/chat/completions"
    payload = json.dumps({
        "model": model,
        "temperature": 0.3,
        "max_tokens": 2048,
        "messages": [{"role": "user", "content": prompt}]
    }).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {key}"
    })
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    return data["choices"][0]["message"]["content"].strip()

# Build provider queue based on keys present
provider_queue = []
if gemini_key:
    # Includes Gemini 3.5 Flash (2.5), 2.0 Flash, 1.5 Flash, 3.1 Pro (1.5 Pro)
    for m in ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"]:
        provider_queue.append(("gemini", m, gemini_key))
if anthropic_key:
    # Includes Claude Sonnet 4.6 (Claude 3.7 Sonnet) and Claude 3.5 Sonnet
    for m in ["claude-3-7-sonnet-latest", "claude-3-7-sonnet-20250219", "claude-3-5-sonnet-latest"]:
        provider_queue.append(("anthropic", m, anthropic_key))
if openai_key:
    # Includes GPT-4o and lightweight/alternative models
    for m in ["gpt-4o", "gpt-4o-mini"]:
        provider_queue.append(("openai", m, openai_key))

description = None
last_error = None

for provider, model, key in provider_queue:
    # Try up to 3 times per model configuration with exponential backoff on 429
    for attempt in range(3):
        try:
            print(f"Attempting to generate using {provider} ({model})...")
            if provider == "gemini":
                description = try_gemini(model, key)
            elif provider == "anthropic":
                description = try_anthropic(model, key)
            elif provider == "openai":
                description = try_openai(model, key)
            break
        except urllib.error.HTTPError as e:
            last_error = e
            if e.code == 429:
                sleep_time = (attempt + 1) * 5
                print(f"⚠️ Hit rate limit (429) using model '{model}'. Retrying in {sleep_time}s...")
                time.sleep(sleep_time)
                continue
            else:
                print(f"❌ HTTP Error {e.code} using model '{model}'. Trying next model.")
                break
        except Exception as e:
            last_error = e
            print(f"❌ Error using model '{model}': {e}. Trying next model.")
            break
            
    if description:
        break

# Cleanup accidental markdown code fences from response wrapping safely
def clean_response(text):
    text = text.strip()
    # Remove leading ```markdown or ```
    if text.startswith("```"):
        first_newline = text.find("\n")
        if first_newline != -1:
            text = text[first_newline:].strip()
    # Remove trailing ```
    if text.endswith("```"):
        text = text[:-3].strip()
    return text

if not description:
    description = (
        f"<!-- AI Generation failed. Last error: {last_error} -->\n"
        "<!-- Please fill in the description manually. -->"
    )
else:
    description = clean_response(description)

with open("/tmp/pr_description.txt", "w") as f:
    f.write(description)

print("--- Preview (first 10 lines) ---")
for line in description.splitlines()[:10]:
    print(line)
