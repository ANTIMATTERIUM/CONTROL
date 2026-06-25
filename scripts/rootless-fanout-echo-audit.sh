#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT ECHO AUDIT ==="

WORK="${TMPDIR:-/tmp}/antimatterium-rootless-fanout-echo-audit"
rm -rf "$WORK"
mkdir -p "$WORK"

cd "$WORK"

echo "=== CLONE CONTROL v0.2.0 ==="
git clone --depth 1 --branch v0.2.0-antimatterium-control-public-rootless-reconstruction-index https://github.com/ANTIMATTERIUM/CONTROL.git control-v020

echo "=== CLONE CORE v0.2.15 ==="
git clone --depth 1 --branch v0.2.15-antimatterium-public-rootless-reconstruction-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core-v0215

echo "=== CLONE WWW v0.1.11 ==="
git clone --depth 1 --branch v0.1.11-antimatterium-www-public-rootless-reconstruction-backlink https://github.com/ANTIMATTERIUM/WWW.git www-v0111

echo "=== CLONE ORG PROFILE v0.0.9 ==="
git clone --depth 1 --branch v0.0.9-antimatterium-org-profile-public-rootless-reconstruction-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile-v009

echo "=== VERIFY CONTROL ROOTLESS INDEX ==="
cd "$WORK/control-v020"
npm run verify:rootless-reconstruction

echo "=== VERIFY CORE ROOTLESS BACKLINK ==="
cd "$WORK/core-v0215"
npm run verify:rootless-reconstruction
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW ROOTLESS BACKLINK ==="
cd "$WORK/www-v0111"
npm run verify:rootless-reconstruction

echo "=== VERIFY ORG PROFILE ROOTLESS BACKLINK ==="
cd "$WORK/org-profile-v009"
npm run verify:rootless-reconstruction

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_GRAPH_CLOSED=true"
echo "ANTIMATTERIUM_PUBLIC_RELEASES_SUFFICIENT=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
