#!/bin/zsh
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

clear
echo "Uploading the complete Women's Voices website to GitHub..."
echo "Folder: $PROJECT_DIR"
echo

git add -A
if ! git diff --cached --quiet; then
  git commit -m "Add one-click project launchers"
fi
git push origin main

echo
echo "Upload complete."
read -k 1 "?Press any key to close this window."
