#!/usr/bin/env bash

# Create a small, shareable source archive without installed dependencies,
# build output, local settings, or previous archives.
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
OUTPUT_DIR="$PROJECT_ROOT/release"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE_PATH="$OUTPUT_DIR/${PROJECT_NAME}-${TIMESTAMP}.zip"

mkdir -p "$OUTPUT_DIR"

# Run from the parent directory so the ZIP extracts into one project folder.
cd "$(dirname "$PROJECT_ROOT")"

zip -rq "$ARCHIVE_PATH" "$PROJECT_NAME" \
  -x "$PROJECT_NAME/node_modules/*" \
     "$PROJECT_NAME/.next/*" \
     "$PROJECT_NAME/out/*" \
     "$PROJECT_NAME/build/*" \
     "$PROJECT_NAME/coverage/*" \
     "$PROJECT_NAME/.git/*" \
     "$PROJECT_NAME/.vercel/*" \
     "$PROJECT_NAME/.playwright-cli/*" \
     "$PROJECT_NAME/.codebuddy/*" \
     "$PROJECT_NAME/.idea/*" \
     "$PROJECT_NAME/output/*" \
     "$PROJECT_NAME/release/*" \
     "$PROJECT_NAME/.DS_Store" \
     "$PROJECT_NAME/npm-debug.log*" \
     "$PROJECT_NAME/yarn-debug.log*" \
     "$PROJECT_NAME/yarn-error.log*" \
     "$PROJECT_NAME/.env" \
     "$PROJECT_NAME/.env.*"

echo "Archive created: $ARCHIVE_PATH"
du -h "$ARCHIVE_PATH" | awk '{print "Archive size: " $1}'
