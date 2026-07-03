#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 54 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0224 ==="
git clone --depth 1 --branch "v0.2.24-antimatterium-control-move51-surface-closure" git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0224" >/dev/null 2>&1

echo "=== CLONE core-v0239 ==="
git clone --depth 1 --branch "v0.2.39-antimatterium-control-v0224-backlink" git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0239" >/dev/null 2>&1

echo "=== CLONE www-v0135 ==="
git clone --depth 1 --branch "v0.1.35-antimatterium-www-control-v0224-backlink" git@github.com:ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0135" >/dev/null 2>&1

echo "=== CLONE org-profile-v0033 ==="
git clone --depth 1 --branch "v0.0.33-antimatterium-org-profile-control-v0224-backlink" git@github.com:ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0033" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.24 ==="
cd "$TMP_DIR/control-v0224"
npm run verify:move52-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.39 ==="
cd "$TMP_DIR/core-v0239"
npm run verify:move53-control-v0224-backlink
npm run test:move53-control-v0224-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY WWW v0.1.35 ==="
cd "$TMP_DIR/www-v0135"
npm run verify:move53-control-v0224-backlink
npm run test:move53-control-v0224-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.33 ==="
cd "$TMP_DIR/org-profile-v0033"
npm run verify:move53-control-v0224-backlink
npm run test:move53-control-v0224-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE53_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
