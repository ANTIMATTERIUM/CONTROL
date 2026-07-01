#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 44 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0219 ==="
git clone --quiet --depth 1 --branch "v0.2.19-antimatterium-control-move41-surface-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0219"

echo "=== CLONE core-v0234 ==="
git clone --quiet --depth 1 --branch "v0.2.34-antimatterium-control-v0219-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0234"

echo "=== CLONE www-v0130 ==="
git clone --quiet --depth 1 --branch "v0.1.30-antimatterium-www-control-v0219-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0130"

echo "=== CLONE org-profile-v0028 ==="
git clone --quiet --depth 1 --branch "v0.0.28-antimatterium-org-profile-control-v0219-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0028"

echo "=== VERIFY CONTROL v0.2.19 ==="
cd "$TMP/control-v0219"
npm run "verify:move42-surface-backlink-fanout-closure"

echo "=== VERIFY CORE v0.2.34 ==="
cd "$TMP/core-v0234"
npm run "verify:move43-control-v0219-backlink"
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.30 ==="
cd "$TMP/www-v0130"
npm run "verify:move43-control-v0219-backlink"

echo "=== VERIFY ORG PROFILE v0.0.28 ==="
cd "$TMP/org-profile-v0028"
npm run "verify:move43-control-v0219-backlink"

echo "ANTIMATTERIUM_MOVE44_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE43_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
