#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 40 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0217 ==="
git clone --quiet --depth 1 --branch "v0.2.17-antimatterium-control-v0216-surface-backlink-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0217"

echo "=== CLONE core-v0232 ==="
git clone --quiet --depth 1 --branch "v0.2.32-antimatterium-control-v0217-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0232"

echo "=== CLONE www-v0128 ==="
git clone --quiet --depth 1 --branch "v0.1.28-antimatterium-www-control-v0217-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0128"

echo "=== CLONE org-profile-v0026 ==="
git clone --quiet --depth 1 --branch "v0.0.26-antimatterium-org-profile-control-v0217-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0026"

echo "=== VERIFY CONTROL v0.2.17 ==="
cd "$TMP/control-v0217"
npm run "verify:move38-surface-backlink-fanout-closure"

echo "=== VERIFY CORE v0.2.32 ==="
cd "$TMP/core-v0232"
npm run "verify:move39-control-v0217-backlink"
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.28 ==="
cd "$TMP/www-v0128"
npm run "verify:move39-control-v0217-backlink"

echo "=== VERIFY ORG PROFILE v0.0.26 ==="
cd "$TMP/org-profile-v0026"
npm run "verify:move39-control-v0217-backlink"

echo "ANTIMATTERIUM_MOVE40_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE39_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
