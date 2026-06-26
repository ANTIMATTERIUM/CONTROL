#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKLINK CLOSURE AUDIT ==="

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

CONTROL_V021_TAG="v0.2.1-antimatterium-control-rootless-fanout-echo-closure"
CORE_V0216_TAG="v0.2.16-antimatterium-rootless-fanout-echo-backlink"
WWW_V0112_TAG="v0.1.12-antimatterium-www-rootless-fanout-echo-backlink"
ORG_PROFILE_V0010_TAG="v0.0.10-antimatterium-org-profile-rootless-fanout-echo-backlink"

echo "=== CLONE CONTROL v0.2.1 ==="
git clone --depth 1 --branch "$CONTROL_V021_TAG" https://github.com/ANTIMATTERIUM/CONTROL.git "$WORKDIR/control-v021"

echo "=== CLONE CORE v0.2.16 ==="
git clone --depth 1 --branch "$CORE_V0216_TAG" https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$WORKDIR/core-v0216"

echo "=== CLONE WWW v0.1.12 ==="
git clone --depth 1 --branch "$WWW_V0112_TAG" https://github.com/ANTIMATTERIUM/WWW.git "$WORKDIR/www-v0112"

echo "=== CLONE ORG PROFILE v0.0.10 ==="
git clone --depth 1 --branch "$ORG_PROFILE_V0010_TAG" https://github.com/ANTIMATTERIUM/.github.git "$WORKDIR/org-profile-v0010"

echo "=== VERIFY CONTROL v0.2.1 ROOTLESS FANOUT ECHO ==="
cd "$WORKDIR/control-v021"
npm run verify:rootless-fanout-echo

echo "=== VERIFY CORE v0.2.16 ROOTLESS FANOUT ECHO BACKLINK ==="
cd "$WORKDIR/core-v0216"
npm run verify:rootless-fanout-echo
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.12 ROOTLESS FANOUT ECHO BACKLINK ==="
cd "$WORKDIR/www-v0112"
npm run verify:rootless-fanout-echo

echo "=== VERIFY ORG PROFILE v0.0.10 ROOTLESS FANOUT ECHO BACKLINK ==="
cd "$WORKDIR/org-profile-v0010"
npm run verify:rootless-fanout-echo

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_CLOSED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
