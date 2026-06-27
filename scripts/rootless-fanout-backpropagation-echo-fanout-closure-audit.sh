#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKPROPAGATION ECHO FANOUT CLOSURE AUDIT ==="

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

CONTROL_V023_TAG="v0.2.3-antimatterium-control-rootless-fanout-backpropagation-echo-closure"
CORE_V0218_TAG="v0.2.18-antimatterium-rootless-fanout-backpropagation-echo-backlink"
WWW_V0114_TAG="v0.1.14-antimatterium-www-rootless-fanout-backpropagation-echo-backlink"
ORG_PROFILE_V0012_TAG="v0.0.12-antimatterium-org-profile-rootless-fanout-backpropagation-echo-backlink"

echo "=== CLONE CONTROL v0.2.3 ==="
git clone --depth 1 --branch "$CONTROL_V023_TAG" https://github.com/ANTIMATTERIUM/CONTROL.git "$WORKDIR/control-v023"

echo "=== CLONE CORE v0.2.18 ==="
git clone --depth 1 --branch "$CORE_V0218_TAG" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$WORKDIR/core-v0218"

echo "=== CLONE WWW v0.1.14 ==="
git clone --depth 1 --branch "$WWW_V0114_TAG" https://github.com/ANTIMATTERIUM/WWW.git "$WORKDIR/www-v0114"

echo "=== CLONE ORG PROFILE v0.0.12 ==="
git clone --depth 1 --branch "$ORG_PROFILE_V0012_TAG" https://github.com/ANTIMATTERIUM/.github.git "$WORKDIR/org-profile-v0012"

echo "=== VERIFY CONTROL v0.2.3 ==="
cd "$WORKDIR/control-v023"
npm run verify:rootless-fanout-backpropagation-echo

echo "=== VERIFY CORE v0.2.18 ==="
cd "$WORKDIR/core-v0218"
npm run verify:rootless-fanout-backpropagation-echo
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.14 ==="
cd "$WORKDIR/www-v0114"
npm run verify:rootless-fanout-backpropagation-echo

echo "=== VERIFY ORG PROFILE v0.0.12 ==="
cd "$WORKDIR/org-profile-v0012"
npm run verify:rootless-fanout-backpropagation-echo

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSED=true"
echo "ANTIMATTERIUM_MOVE11_SURFACE_ECHOES_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
