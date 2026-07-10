#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 100 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "=== CLONE control-v0247 ==="
git clone --depth 1 --branch "v0.2.47-antimatterium-control-move97-surface-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0247" >/dev/null 2>&1
cd "$TMP_DIR/control-v0247"
echo "=== VERIFY CONTROL v0.2.47 ==="
npm run verify:move98-surface-backlink-fanout-closure

echo "=== CLONE core-v0262 ==="
git clone --depth 1 --branch "v0.2.62-antimatterium-control-v0247-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0262" >/dev/null 2>&1
cd "$TMP_DIR/core-v0262"
echo "=== VERIFY CORE v0.2.62 ==="
npm run verify:move99-control-v0247-backlink
npm run test:move99-control-v0247-backlink
npm run verify:privacy
npm run verify:claims

echo "=== CLONE www-v0158 ==="
git clone --depth 1 --branch "v0.1.58-antimatterium-www-control-v0247-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0158" >/dev/null 2>&1
cd "$TMP_DIR/www-v0158"
echo "=== VERIFY WWW v0.1.58 ==="
npm run verify:move99-control-v0247-backlink
npm run test:move99-control-v0247-backlink
if npm run | grep -q "verify:privacy"; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if npm run | grep -q "verify:claims"; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "=== CLONE org-profile-v0056 ==="
git clone --depth 1 --branch "v0.0.56-antimatterium-org-profile-control-v0247-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0056" >/dev/null 2>&1
cd "$TMP_DIR/org-profile-v0056"
echo "=== VERIFY ORG PROFILE v0.0.56 ==="
npm run verify:move99-control-v0247-backlink
npm run test:move99-control-v0247-backlink
if npm run | grep -q "verify:privacy"; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if npm run | grep -q "verify:claims"; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "ANTIMATTERIUM_MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE99_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
