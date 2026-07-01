#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 42 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0218 ==="
git clone --quiet --depth 1 --branch "v0.2.18-antimatterium-control-move39-surface-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0218"

echo "=== CLONE core-v0233 ==="
git clone --quiet --depth 1 --branch "v0.2.33-antimatterium-control-v0218-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0233"

echo "=== CLONE www-v0129 ==="
git clone --quiet --depth 1 --branch "v0.1.29-antimatterium-www-control-v0218-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0129"

echo "=== CLONE org-profile-v0027 ==="
git clone --quiet --depth 1 --branch "v0.0.27-antimatterium-org-profile-control-v0218-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0027"

echo "=== VERIFY CONTROL v0.2.18 ==="
cd "$TMP/control-v0218"
npm run "verify:move40-surface-backlink-fanout-closure"

echo "=== VERIFY CORE v0.2.33 ==="
cd "$TMP/core-v0233"
npm run "verify:move41-control-v0218-backlink"
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.29 ==="
cd "$TMP/www-v0129"
npm run "verify:move41-control-v0218-backlink"

echo "=== VERIFY ORG PROFILE v0.0.27 ==="
cd "$TMP/org-profile-v0027"
npm run "verify:move41-control-v0218-backlink"

echo "ANTIMATTERIUM_MOVE42_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE41_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
