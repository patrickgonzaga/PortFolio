#!/usr/bin/env python3
"""
Generates a PR description using the Gemini API and writes it to /tmp/pr_description.txt.
Called by the ai-pr-description.yml GitHub Actions workflow.
"""
import os
import json
import urllib.request

api_key  = os.environ["GEMINI_API_KEY"]
pr_title = os.environ.get("PR_TITLE", "")
branch   = os.environ.get("PR_BRANCH", "")
base     = os.environ.get("PR_BASE", "")
files    = os.environ.get("PR_FILES", "")

with open("/tmp/pr_diff.txt", "r", errors="replace") as f:
    diff = f.read()

template = """\
# [emoji] [Descriptive Title based on the changes]

## 📝 Description
[Clear summary of WHAT changed, WHY, and HOW. Use bullet points.]

- **Changed:** [what specifically changed]
- **Why:** [the reason / motivation]
- **Approach:** [how it was implemented]

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
Generate a professional, detailed PR description based on the information below.
Follow this EXACT markdown format — fill in every section, do NOT skip any.
Auto-check the correct Type of Change checkbox by replacing '- [ ]' with '- [x]' for the matching type.

Branch: {branch} -> {base}
Title: {pr_title}
Changed files: {files}
Diff (may be truncated):
{diff}

---FORMAT START---
{template}
---FORMAT END---

Return ONLY the filled markdown. No preamble, no code fences, no extra text."""

payload = json.dumps({
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {"temperature": 0.3, "maxOutputTokens": 2048}
}).encode("utf-8")

url = (
    "https://generativelanguage.googleapis.com/v1beta/"
    f"models/gemini-2.0-flash:generateContent?key={api_key}"
)
req = urllib.request.Request(
    url, data=payload, headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
    lines = text.splitlines()
    if lines and lines[0].startswith("```"):
        lines = lines[1:]
    if lines and lines[-1].startswith("```"):
        lines = lines[:-1]
    description = "\n".join(lines)
except Exception as e:
    description = (
        f"<!-- Gemini generation failed: {e} -->\n"
        "<!-- Please fill in the description manually. -->"
    )

with open("/tmp/pr_description.txt", "w") as f:
    f.write(description)

print("--- Preview (first 10 lines) ---")
for line in description.splitlines()[:10]:
    print(line)
