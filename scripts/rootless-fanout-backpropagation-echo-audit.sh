#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKPROPAGATION ECHO AUDIT ==="

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

CONTROL_V022_TAG="v0.2.2-antimatterium-control-rootless-fanout-backlink-closure"
CORE_V0217_TAG="v0.2.17-antimatterium-rootless-fanout-backlink-closure-backlink"
WWW_V0113_TAG="v0.1.13-antimatterium-www-rootless-fanout-backlink-closure-backlink"
ORG_PROFILE_V0011_TAG="v0.0.11-antimatterium-org-profile-rootless-fanout-backlink-closure-backlink"

echo "=== CLONE CONTROL v0.2.2 ==="
git clone --depth 1 --branch "$CONTROL_V022_TAG" https://github.com/ANTIMATTERIUM/CONTROL.git "$WORKDIR/control-v022"

echo "=== CLONE CORE v0.2.17 ==="
git clone --depth 1 --branch "$CORE_V0217_TAG" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$WORKDIR/core-v0217"

echo "=== CLONE WWW v0.1.13 ==="
git clone --depth 1 --branch "$WWW_V0113_TAG" https://github.com/ANTIMATTERIUM/WWW.git "$WORKDIR/www-v0113"

echo "=== CLONE ORG PROFILE v0.0.11 ==="
git clone --depth 1 --branch "$ORG_PROFILE_V0011_TAG" https://github.com/ANTIMATTERIUM/.github.git "$WORKDIR/org-profile-v0011"

echo "=== VERIFY CONTROL v0.2.2 ==="
cd "$WORKDIR/control-v022"
npm run verify:rootless-fanout-backlink-closure

echo "=== VERIFY CORE v0.2.17 ==="
cd "$WORKDIR/core-v0217"
npm run verify:rootless-fanout-backlink-closure
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.13 ==="
cd "$WORKDIR/www-v0113"
npm run verify:rootless-fanout-backlink-closure

echo "=== VERIFY ORG PROFILE v0.0.11 ==="
cd "$WORKDIR/org-profile-v0011"
npm run verify:rootless-fanout-backlink-closure

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSED=true"
echo "ANTIMATTERIUM_MOVE9_SURFACE_ECHOES_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
