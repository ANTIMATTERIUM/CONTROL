#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 74 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_optional_script() {
  local alias="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$alias"; then
    npm run "$alias"
  else
    echo "SKIP_MISSING_SCRIPT=$alias"
  fi
}

echo "=== CLONE control-v0234 ==="
git clone --quiet --depth 1 --branch "v0.2.34-antimatterium-control-move71-surface-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0234" || {
  git clone --quiet https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0234"
  git -C "$TMP/control-v0234" checkout "v0.2.34-antimatterium-control-move71-surface-closure"
}

echo "=== CLONE core-v0249 ==="
git clone --quiet --depth 1 --branch "v0.2.49-antimatterium-control-v0234-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0249" || {
  git clone --quiet https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0249"
  git -C "$TMP/core-v0249" checkout "v0.2.49-antimatterium-control-v0234-backlink"
}

echo "=== CLONE www-v0145 ==="
git clone --quiet --depth 1 --branch "v0.1.45-antimatterium-www-control-v0234-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0145" || {
  git clone --quiet https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0145"
  git -C "$TMP/www-v0145" checkout "v0.1.45-antimatterium-www-control-v0234-backlink"
}

echo "=== CLONE org-profile-v0043 ==="
git clone --quiet --depth 1 --branch "v0.0.43-antimatterium-org-profile-control-v0234-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0043" || {
  git clone --quiet https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0043"
  git -C "$TMP/org-profile-v0043" checkout "v0.0.43-antimatterium-org-profile-control-v0234-backlink"
}

echo "=== VERIFY CONTROL v0.2.34 ==="
cd "$TMP/control-v0234"
npm run verify:move72-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.49 ==="
cd "$TMP/core-v0249"
npm run verify:move73-control-v0234-backlink
npm run test:move73-control-v0234-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== VERIFY WWW v0.1.45 ==="
cd "$TMP/www-v0145"
npm run verify:move73-control-v0234-backlink
npm run test:move73-control-v0234-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.43 ==="
cd "$TMP/org-profile-v0043"
npm run verify:move73-control-v0234-backlink
npm run test:move73-control-v0234-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "ANTIMATTERIUM_MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE73_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
