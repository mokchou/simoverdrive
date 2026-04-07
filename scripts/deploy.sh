#!/bin/bash
# deploy.sh — Build and deploy SimOverdrive to Netlify
# Usage: NETLIFY_TOKEN=<token> NETLIFY_SITE_ID=<site-id> ./scripts/deploy.sh

set -e

NETLIFY_TOKEN="${NETLIFY_TOKEN:-}"
NETLIFY_SITE_ID="${NETLIFY_SITE_ID:-c4232eb3-cb17-49a7-9c8e-6807b7842068}"

if [ -z "$NETLIFY_TOKEN" ]; then
  echo "Error: NETLIFY_TOKEN is required"
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

echo "==> Building..."
npm install --include=dev
npm run build

echo "==> Packaging dist/..."
ZIP_FILE="/tmp/simoverdrive-$(date +%s).zip"
cd dist
python3 -c "
import zipfile, os
with zipfile.ZipFile('$ZIP_FILE', 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk('.'):
        for file in files:
            fp = os.path.join(root, file)
            zf.write(fp, os.path.relpath(fp, '.'))
print('Zip created:', '$ZIP_FILE')
"
cd "$REPO_ROOT"

echo "==> Deploying to Netlify..."
RESPONSE=$(curl -s -X POST "https://api.netlify.com/api/v1/sites/$NETLIFY_SITE_ID/deploys" \
  -H "Authorization: Bearer $NETLIFY_TOKEN" \
  -H "Content-Type: application/zip" \
  --data-binary "@$ZIP_FILE")

DEPLOY_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin).get('id',''))")
STATE=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin).get('state','unknown'))")

echo "Deploy ID: $DEPLOY_ID — State: $STATE"

# Poll until ready
for i in $(seq 1 20); do
  sleep 5
  CURRENT_STATE=$(curl -s "https://api.netlify.com/api/v1/deploys/$DEPLOY_ID" \
    -H "Authorization: Bearer $NETLIFY_TOKEN" | \
    python3 -c "import sys,json; print(json.load(sys.stdin).get('state','unknown'))")
  echo "  Attempt $i: $CURRENT_STATE"
  if [ "$CURRENT_STATE" = "ready" ]; then
    echo "==> Live: https://simoverdrive.netlify.app"
    rm -f "$ZIP_FILE"
    exit 0
  fi
done

echo "Error: deploy timed out"
exit 1
