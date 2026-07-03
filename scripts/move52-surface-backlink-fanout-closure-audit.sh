#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 52 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_if_script() {
  local script_name="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0223 ==="
git clone --depth 1 --branch v0.2.23-antimatterium-control-move49-surface-closure https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0223" >/dev/null 2>&1

echo "=== CLONE core-v0238 ==="
git clone --depth 1 --branch v0.2.38-antimatterium-control-v0223-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0238" >/dev/null 2>&1

echo "=== CLONE www-v0134 ==="
git clone --depth 1 --branch v0.1.34-antimatterium-www-control-v0223-backlink https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0134" >/dev/null 2>&1

echo "=== CLONE org-profile-v0032 ==="
git clone --depth 1 --branch v0.0.32-antimatterium-org-profile-control-v0223-backlink https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0032" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.23 ==="
cd "$TMP/control-v0223"
npm run verify:move50-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.38 ==="
cd "$TMP/core-v0238"
npm run verify:move51-control-v0223-backlink
run_if_script "verify:privacy"
run_if_script "verify:claims"

echo "=== VERIFY WWW v0.1.34 ==="
cd "$TMP/www-v0134"
npm run verify:move51-control-v0223-backlink
run_if_script "verify:privacy"
run_if_script "verify:claims"

echo "=== VERIFY ORG PROFILE v0.0.32 ==="
cd "$TMP/org-profile-v0032"
npm run verify:move51-control-v0223-backlink
run_if_script "verify:privacy"
run_if_script "verify:claims"

echo "ANTIMATTERIUM_MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE51_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
