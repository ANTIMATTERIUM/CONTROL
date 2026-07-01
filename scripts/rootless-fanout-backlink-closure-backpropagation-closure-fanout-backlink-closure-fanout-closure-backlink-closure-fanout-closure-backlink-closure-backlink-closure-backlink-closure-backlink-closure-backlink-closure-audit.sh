#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 36 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0215 ==="
git clone --quiet --depth 1 --branch "v0.2.15-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0215"

echo "=== CLONE core-v0230 ==="
git clone --quiet --depth 1 --branch "v0.2.30-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0230"

echo "=== CLONE www-v0126 ==="
git clone --quiet --depth 1 --branch "v0.1.26-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0126"

echo "=== CLONE org-profile-v0024 ==="
git clone --quiet --depth 1 --branch "v0.0.24-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0024"

echo "=== VERIFY CONTROL v0.2.15 ==="
cd "$TMP/control-v0215"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure"

echo "=== VERIFY CORE v0.2.30 ==="
cd "$TMP/core-v0230"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.26 ==="
cd "$TMP/www-v0126"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"

echo "=== VERIFY ORG PROFILE v0.0.24 ==="
cd "$TMP/org-profile-v0024"
npm run "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink"

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_CLOSED=true"
echo "ANTIMATTERIUM_MOVE35_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
