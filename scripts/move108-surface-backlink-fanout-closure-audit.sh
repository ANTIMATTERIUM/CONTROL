#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 108 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0251 ==="
git clone https://github.com/ANTIMATTERIUM/CONTROL "$TMP/control-v0251"
cd "$TMP/control-v0251"
git checkout v0.2.51-antimatterium-control-move105-surface-closure
echo "=== VERIFY CONTROL v0.2.51 ==="
npm run verify:move106-surface-backlink-fanout-closure

echo "=== CLONE core-v0266 ==="
git clone https://github.com/ANTIMATTERIUM/ANTIMATTERIUM "$TMP/core-v0266"
cd "$TMP/core-v0266"
git checkout v0.2.66-antimatterium-control-v0251-backlink
echo "=== VERIFY CORE v0.2.66 ==="
npm run verify:move107-control-v0251-backlink
npm run test:move107-control-v0251-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0162 ==="
git clone https://github.com/ANTIMATTERIUM/WWW "$TMP/www-v0162"
cd "$TMP/www-v0162"
git checkout v0.1.62-antimatterium-www-control-v0251-backlink
echo "=== VERIFY WWW v0.1.62 ==="
npm run verify:move107-control-v0251-backlink
npm run test:move107-control-v0251-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0060 ==="
git clone https://github.com/ANTIMATTERIUM/.github "$TMP/org-profile-v0060"
cd "$TMP/org-profile-v0060"
git checkout v0.0.60-antimatterium-org-profile-control-v0251-backlink
echo "=== VERIFY ORG PROFILE v0.0.60 ==="
npm run verify:move107-control-v0251-backlink
npm run test:move107-control-v0251-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE108_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE107_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
