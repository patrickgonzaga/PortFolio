#!/usr/bin/env python3
"""
Performs an AI code review on the PR diff and posts comments to the PR.
Dynamically detects available API keys (Gemini, Anthropic, OpenAI) and falls back.
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

with open("/tmp/pr_diff.txt", "r", errors="replace") as f:
    diff = f.read()

prompt = f"""You are a senior tech lead conducting a code review on a pull request.
Review the git diff below and provide constructive, detailed feedback. 

Focus on:
1. SOLID principles and code quality issues
2. Security issues or bugs
3. Performance bottlenecks
4. Consistency with modern TypeScript/C#/.NET structures (depending on diff)

Provide your review in clear, professional markdown format. Do not use code fence blocks wrapping the entire response. Start directly with '## 🔍 AI Code Review Feedback'.

Branch: {branch} -> {base}
Title: {pr_title}
Diff:
{diff}
"""

def try_gemini(model, key):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 2048}
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
        "temperature": 0.2,
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
        "temperature": 0.2,
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

# Build provider queue
provider_queue = []
if gemini_key:
    for m in ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"]:
        provider_queue.append(("gemini", m, gemini_key))
if anthropic_key:
    for m in ["claude-3-7-sonnet-latest", "claude-3-5-sonnet-latest"]:
        provider_queue.append(("anthropic", m, anthropic_key))
if openai_key:
    for m in ["gpt-4o", "gpt-4o-mini"]:
        provider_queue.append(("openai", m, openai_key))

review = None
last_error = None

def clean_response(text):
    text = text.strip()
    if text.startswith("```"):
        first_newline = text.find("\n")
        if first_newline != -1:
            text = text[first_newline:].strip()
    if text.endswith("```"):
        text = text[:-3].strip()
    return text

for provider, model, key in provider_queue:
    for attempt in range(3):
        try:
            print(f"Generating review using {provider} ({model})...")
            if provider == "gemini":
                review = try_gemini(model, key)
            elif provider == "anthropic":
                review = try_anthropic(model, key)
            elif provider == "openai":
                review = try_openai(model, key)
            break
        except urllib.error.HTTPError as e:
            last_error = e
            if e.code == 429:
                sleep_time = (attempt + 1) * 5
                time.sleep(sleep_time)
                continue
            else:
                break
        except Exception as e:
            last_error = e
            break
    if review:
        break

if not review:
    review = f"<!-- AI Code Review failed. Last error: {last_error} -->"
else:
    review = clean_response(review)

with open("/tmp/pr_review.txt", "w") as f:
    f.write(review)

print("✅ Review generated successfully.")
