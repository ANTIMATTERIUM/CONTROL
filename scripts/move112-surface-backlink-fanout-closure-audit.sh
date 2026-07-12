#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 112 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0253 ==="
git clone --branch v0.2.53-antimatterium-control-move109-surface-closure --depth 1 https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0253"
cd "$TMP/control-v0253"
echo "=== VERIFY CONTROL v0.2.53 ==="
npm run verify:move110-surface-backlink-fanout-closure

echo "=== CLONE core-v0268 ==="
git clone --branch v0.2.68-antimatterium-control-v0253-backlink --depth 1 https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0268"
cd "$TMP/core-v0268"
echo "=== VERIFY CORE v0.2.68 ==="
npm run verify:move111-control-v0253-backlink
npm run test:move111-control-v0253-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0164 ==="
git clone --branch v0.1.64-antimatterium-www-control-v0253-backlink --depth 1 https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0164"
cd "$TMP/www-v0164"
echo "=== VERIFY WWW v0.1.64 ==="
npm run verify:move111-control-v0253-backlink
npm run test:move111-control-v0253-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0062 ==="
git clone --branch v0.0.62-antimatterium-org-profile-control-v0253-backlink --depth 1 https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0062"
cd "$TMP/org-profile-v0062"
echo "=== VERIFY ORG PROFILE v0.0.62 ==="
npm run verify:move111-control-v0253-backlink
npm run test:move111-control-v0253-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE112_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE111_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
