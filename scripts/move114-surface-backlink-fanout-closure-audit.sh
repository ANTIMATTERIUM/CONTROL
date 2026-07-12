#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 114 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_if_script() {
  local script="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

echo "=== CLONE control-v0254 ==="
git clone --depth 1 --branch v0.2.54-antimatterium-control-move111-surface-closure https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0254"
cd "$TMP/control-v0254"
echo "=== VERIFY CONTROL v0.2.54 ==="
npm run verify:move112-surface-backlink-fanout-closure

echo "=== CLONE core-v0269 ==="
git clone --depth 1 --branch v0.2.69-antimatterium-control-v0254-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0269"
cd "$TMP/core-v0269"
echo "=== VERIFY CORE v0.2.69 ==="
npm run verify:move113-control-v0254-backlink
npm run test:move113-control-v0254-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE www-v0165 ==="
git clone --depth 1 --branch v0.1.65-antimatterium-www-control-v0254-backlink https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0165"
cd "$TMP/www-v0165"
echo "=== VERIFY WWW v0.1.65 ==="
npm run verify:move113-control-v0254-backlink
npm run test:move113-control-v0254-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE org-profile-v0063 ==="
git clone --depth 1 --branch v0.0.63-antimatterium-org-profile-control-v0254-backlink https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0063"
cd "$TMP/org-profile-v0063"
echo "=== VERIFY ORG PROFILE v0.0.63 ==="
npm run verify:move113-control-v0254-backlink
npm run test:move113-control-v0254-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE114_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE113_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
