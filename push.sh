#!/usr/bin/env bash
# Replaces the contents of the GitHub repo with this folder and pushes.
set -e
REPO="${REPO_URL:-https://github.com/vaswanipranjal/Instahelp-PRD.git}"
SRC="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
git clone "$REPO" "$TMP/repo"
cd "$TMP/repo"
git rm -rq . 2>/dev/null || true
cp -R "$SRC"/. ./
rm -f push.sh
git add -A
git commit -m "Clean up repo: reorganise docs and screens, update PRD, fix prototype build"
git push origin HEAD
echo "Done. Refresh your GitHub page."
