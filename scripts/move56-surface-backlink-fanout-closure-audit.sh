#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 56 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0225 ==="
git clone --depth 1 --branch "v0.2.25-antimatterium-control-move53-surface-closure" git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0225" >/dev/null 2>&1

echo "=== CLONE core-v0240 ==="
git clone --depth 1 --branch "v0.2.40-antimatterium-control-v0225-backlink" git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0240" >/dev/null 2>&1

echo "=== CLONE www-v0136 ==="
git clone --depth 1 --branch "v0.1.36-antimatterium-www-control-v0225-backlink" git@github.com:ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0136" >/dev/null 2>&1

echo "=== CLONE org-profile-v0034 ==="
git clone --depth 1 --branch "v0.0.34-antimatterium-org-profile-control-v0225-backlink" git@github.com:ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0034" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.25 ==="
cd "$TMP_DIR/control-v0225"
npm run verify:move54-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.40 ==="
cd "$TMP_DIR/core-v0240"
npm run verify:move55-control-v0225-backlink
npm run test:move55-control-v0225-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY WWW v0.1.36 ==="
cd "$TMP_DIR/www-v0136"
npm run verify:move55-control-v0225-backlink
npm run test:move55-control-v0225-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.34 ==="
cd "$TMP_DIR/org-profile-v0034"
npm run verify:move55-control-v0225-backlink
npm run test:move55-control-v0225-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE55_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
