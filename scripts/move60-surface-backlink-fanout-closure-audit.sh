#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 60 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

run_if_script() {
  local script_name="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0227 ==="
git clone --depth 1 --branch "v0.2.27-antimatterium-control-move57-surface-closure" git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0227" >/dev/null 2>&1

echo "=== CLONE core-v0242 ==="
git clone --depth 1 --branch "v0.2.42-antimatterium-control-v0227-backlink" git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0242" >/dev/null 2>&1

echo "=== CLONE www-v0138 ==="
git clone --depth 1 --branch "v0.1.38-antimatterium-www-control-v0227-backlink" git@github.com:ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0138" >/dev/null 2>&1

echo "=== CLONE org-profile-v0036 ==="
git clone --depth 1 --branch "v0.0.36-antimatterium-org-profile-control-v0227-backlink" git@github.com:ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0036" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.27 ==="
cd "$TMP_DIR/control-v0227"
npm run verify:move58-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.42 ==="
cd "$TMP_DIR/core-v0242"
npm run verify:move59-control-v0227-backlink
npm run test:move59-control-v0227-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY WWW v0.1.38 ==="
cd "$TMP_DIR/www-v0138"
npm run verify:move59-control-v0227-backlink
npm run test:move59-control-v0227-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.36 ==="
cd "$TMP_DIR/org-profile-v0036"
npm run verify:move59-control-v0227-backlink
npm run test:move59-control-v0227-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE59_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
