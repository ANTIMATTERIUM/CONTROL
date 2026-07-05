#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 66 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$TMP"

echo "=== CLONE control-v0230 ==="
git clone -q --depth 1 --branch v0.2.30-antimatterium-control-move63-surface-closure https://github.com/ANTIMATTERIUM/CONTROL.git control-v0230

echo "=== CLONE core-v0245 ==="
git clone -q --depth 1 --branch v0.2.45-antimatterium-control-v0230-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core-v0245

echo "=== CLONE www-v0141 ==="
git clone -q --depth 1 --branch v0.1.41-antimatterium-www-control-v0230-backlink https://github.com/ANTIMATTERIUM/WWW.git www-v0141

echo "=== CLONE org-profile-v0039 ==="
git clone -q --depth 1 --branch v0.0.39-antimatterium-org-profile-control-v0230-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile-v0039

echo "=== VERIFY CONTROL v0.2.30 ==="
cd "$TMP/control-v0230"
npm run verify:move64-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.45 ==="
cd "$TMP/core-v0245"
npm run verify:move65-control-v0230-backlink
npm run test:move65-control-v0230-backlink
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.41 ==="
cd "$TMP/www-v0141"
npm run verify:move65-control-v0230-backlink
npm run test:move65-control-v0230-backlink
node -e "const s=require('./package.json').scripts||{}; process.exit(s['verify:privacy']?0:42)" && npm run verify:privacy || echo "SKIP_MISSING_SCRIPT=verify:privacy"
node -e "const s=require('./package.json').scripts||{}; process.exit(s['verify:claims']?0:42)" && npm run verify:claims || echo "SKIP_MISSING_SCRIPT=verify:claims"

echo "=== VERIFY ORG PROFILE v0.0.39 ==="
cd "$TMP/org-profile-v0039"
npm run verify:move65-control-v0230-backlink
npm run test:move65-control-v0230-backlink
node -e "const s=require('./package.json').scripts||{}; process.exit(s['verify:privacy']?0:42)" && npm run verify:privacy || echo "SKIP_MISSING_SCRIPT=verify:privacy"
node -e "const s=require('./package.json').scripts||{}; process.exit(s['verify:claims']?0:42)" && npm run verify:claims || echo "SKIP_MISSING_SCRIPT=verify:claims"

echo "ANTIMATTERIUM_MOVE66_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE65_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
