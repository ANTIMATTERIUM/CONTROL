#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT CLOSURE BACKLINK CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v029 ==="
git clone --quiet --depth 1 --branch "v0.2.9-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure" https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v029"

echo "=== CLONE core-v0224 ==="
git clone --quiet --depth 1 --branch "v0.2.24-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0224"

echo "=== CLONE www-v0120 ==="
git clone --quiet --depth 1 --branch "v0.1.20-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink" https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0120"

echo "=== CLONE org-profile-v0018 ==="
git clone --quiet --depth 1 --branch "v0.0.18-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink" https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0018"

echo "=== VERIFY CONTROL v0.2.9 ==="
(cd "$TMP/control-v029" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure)

echo "=== VERIFY CORE v0.2.24 ==="
(cd "$TMP/core-v0224" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure && npm run verify:privacy && npm run verify:claims)

echo "=== VERIFY WWW v0.1.20 ==="
(cd "$TMP/www-v0120" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure)

echo "=== VERIFY ORG PROFILE v0.0.18 ==="
(cd "$TMP/org-profile-v0018" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSED=true"
echo "ANTIMATTERIUM_MOVE23_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
