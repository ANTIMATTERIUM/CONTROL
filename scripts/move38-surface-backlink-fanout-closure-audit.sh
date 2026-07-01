#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 38 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0216 ==="
git clone --quiet --depth 1 --branch "v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0216"

echo "=== CLONE core-v0231 ==="
git clone --quiet --depth 1 --branch "v0.2.31-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0231"

echo "=== CLONE www-v0127 ==="
git clone --quiet --depth 1 --branch "v0.1.27-antimatterium-www-control-v0216-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0127"

echo "=== CLONE org-profile-v0025 ==="
git clone --quiet --depth 1 --branch "v0.0.25-antimatterium-org-profile-control-v0216-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0025"

echo "=== VERIFY CONTROL v0.2.16 ==="
cd "$TMP/control-v0216"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure"

echo "=== VERIFY CORE v0.2.31 ==="
cd "$TMP/core-v0231"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.27 ==="
cd "$TMP/www-v0127"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"

echo "=== VERIFY ORG PROFILE v0.0.25 ==="
cd "$TMP/org-profile-v0025"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"

echo "ANTIMATTERIUM_MOVE38_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE37_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
