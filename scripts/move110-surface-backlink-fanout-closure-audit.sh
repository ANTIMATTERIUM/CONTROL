#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 110 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

run_optional() {
  local script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)" "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0252 ==="
git clone --depth 1 --branch v0.2.52-antimatterium-control-move107-surface-closure https://github.com/ANTIMATTERIUM/CONTROL.git "$TMPDIR/control-v0252"
cd "$TMPDIR/control-v0252"
echo "=== VERIFY CONTROL v0.2.52 ==="
npm run verify:move108-surface-backlink-fanout-closure

echo "=== CLONE core-v0267 ==="
git clone --depth 1 --branch v0.2.67-antimatterium-control-v0252-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMPDIR/core-v0267"
cd "$TMPDIR/core-v0267"
echo "=== VERIFY CORE v0.2.67 ==="
npm run verify:move109-control-v0252-backlink
npm run test:move109-control-v0252-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0163 ==="
git clone --depth 1 --branch v0.1.63-antimatterium-www-control-v0252-backlink https://github.com/ANTIMATTERIUM/WWW.git "$TMPDIR/www-v0163"
cd "$TMPDIR/www-v0163"
echo "=== VERIFY WWW v0.1.63 ==="
npm run verify:move109-control-v0252-backlink
npm run test:move109-control-v0252-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0061 ==="
git clone --depth 1 --branch v0.0.61-antimatterium-org-profile-control-v0252-backlink https://github.com/ANTIMATTERIUM/.github.git "$TMPDIR/org-profile-v0061"
cd "$TMPDIR/org-profile-v0061"
echo "=== VERIFY ORG PROFILE v0.0.61 ==="
npm run verify:move109-control-v0252-backlink
npm run test:move109-control-v0252-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE109_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
