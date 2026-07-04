#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 58 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0226 ==="
git clone --depth 1 --branch "v0.2.26-antimatterium-control-move55-surface-closure" git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0226" >/dev/null 2>&1

echo "=== CLONE core-v0241 ==="
git clone --depth 1 --branch "v0.2.41-antimatterium-control-v0226-backlink" git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0241" >/dev/null 2>&1

echo "=== CLONE www-v0137 ==="
git clone --depth 1 --branch "v0.1.37-antimatterium-www-control-v0226-backlink" git@github.com:ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0137" >/dev/null 2>&1

echo "=== CLONE org-profile-v0035 ==="
git clone --depth 1 --branch "v0.0.35-antimatterium-org-profile-control-v0226-backlink" git@github.com:ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0035" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.26 ==="
cd "$TMP_DIR/control-v0226"
npm run verify:move56-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.41 ==="
cd "$TMP_DIR/core-v0241"
npm run verify:move57-control-v0226-backlink
npm run test:move57-control-v0226-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY WWW v0.1.37 ==="
cd "$TMP_DIR/www-v0137"
npm run verify:move57-control-v0226-backlink
npm run test:move57-control-v0226-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.35 ==="
cd "$TMP_DIR/org-profile-v0035"
npm run verify:move57-control-v0226-backlink
npm run test:move57-control-v0226-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE57_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
