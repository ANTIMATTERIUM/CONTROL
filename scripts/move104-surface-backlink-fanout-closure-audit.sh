#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 104 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_optional() {
  local script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)" "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0249 ==="
git clone --depth 1 --branch v0.2.49-antimatterium-control-move101-surface-closure https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0249"
cd "$TMP/control-v0249"

echo "=== VERIFY CONTROL v0.2.49 ==="
npm run verify:move102-surface-backlink-fanout-closure

echo "=== CLONE core-v0264 ==="
git clone --depth 1 --branch v0.2.64-antimatterium-control-v0249-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0264"
cd "$TMP/core-v0264"

echo "=== VERIFY CORE v0.2.64 ==="
npm run verify:move103-control-v0249-backlink
npm run test:move103-control-v0249-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0160 ==="
git clone --depth 1 --branch v0.1.60-antimatterium-www-control-v0249-backlink https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0160"
cd "$TMP/www-v0160"

echo "=== VERIFY WWW v0.1.60 ==="
npm run verify:move103-control-v0249-backlink
npm run test:move103-control-v0249-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0058 ==="
git clone --depth 1 --branch v0.0.58-antimatterium-org-profile-control-v0249-backlink https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0058"
cd "$TMP/org-profile-v0058"

echo "=== VERIFY ORG PROFILE v0.0.58 ==="
npm run verify:move103-control-v0249-backlink
npm run test:move103-control-v0249-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE103_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
