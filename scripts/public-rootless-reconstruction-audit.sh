#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM PUBLIC ROOTLESS RECONSTRUCTION AUDIT ==="

WORK="${TMPDIR:-/tmp}/antimatterium-public-rootless-reconstruction-audit"
rm -rf "$WORK"
mkdir -p "$WORK"

cd "$WORK"

echo "=== CLONE CONTROL v0.1.9 ==="
git clone --depth 1 --branch v0.1.9-antimatterium-control-public-ecosystem-index-echo-closure https://github.com/ANTIMATTERIUM/CONTROL.git control-v019

echo "=== CLONE CONTROL v0.1.8 ==="
git clone --depth 1 --branch v0.1.8-antimatterium-control-public-ecosystem-index https://github.com/ANTIMATTERIUM/CONTROL.git control-v018

echo "=== CLONE CORE v0.2.14 ==="
git clone --depth 1 --branch v0.2.14-antimatterium-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core-v0214

echo "=== CLONE WWW v0.1.10 ==="
git clone --depth 1 --branch v0.1.10-antimatterium-www-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/WWW.git www-v0110

echo "=== CLONE ORG PROFILE v0.0.8 ==="
git clone --depth 1 --branch v0.0.8-antimatterium-org-profile-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile-v008

echo "=== VERIFY CONTROL v0.1.8 INDEX ==="
cd "$WORK/control-v018"
npm run verify:ecosystem-index

echo "=== VERIFY CORE v0.2.14 ==="
cd "$WORK/core-v0214"
npm run verify:ecosystem-index
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.10 ==="
cd "$WORK/www-v0110"
npm run verify:ecosystem-index

echo "=== VERIFY ORG PROFILE v0.0.8 ==="
cd "$WORK/org-profile-v008"
npm run verify:ecosystem-index

echo "=== VERIFY CONTROL v0.1.9 ECHO ==="
cd "$WORK/control-v019"
npm run verify:ecosystem-echo

echo "ANTIMATTERIUM_PUBLIC_ROOTLESS_RECONSTRUCTION_AUDIT_PASS=true"
echo "ANTIMATTERIUM_PUBLIC_RELEASES_SUFFICIENT=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
