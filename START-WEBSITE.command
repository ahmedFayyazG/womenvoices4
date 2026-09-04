#!/bin/zsh
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

clear
echo "Starting the complete Women's Voices website..."
echo "Folder: $PROJECT_DIR"
echo

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Opening the official download page."
  open "https://nodejs.org/en/download"
  read -k 1 "?Install Node.js, then run this file again."
  exit 1
fi

npm install
rm -rf "$PROJECT_DIR/.next"

(sleep 2; open "http://localhost:3000") &
npm run dev
