#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM PUBLIC ECOSYSTEM INDEX ECHO AUDIT ==="

WORK="${TMPDIR:-/tmp}/antimatterium-public-ecosystem-index-echo-audit"
rm -rf "$WORK"
mkdir -p "$WORK"

cd "$WORK"

echo "=== CLONE CONTROL v0.1.8 ==="
git clone --depth 1 --branch v0.1.8-antimatterium-control-public-ecosystem-index https://github.com/ANTIMATTERIUM/CONTROL.git control-v018

echo "=== CLONE CORE v0.2.14 ==="
git clone --depth 1 --branch v0.2.14-antimatterium-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core-v0214

echo "=== CLONE WWW v0.1.10 ==="
git clone --depth 1 --branch v0.1.10-antimatterium-www-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/WWW.git www-v0110

echo "=== CLONE ORG PROFILE v0.0.8 ==="
git clone --depth 1 --branch v0.0.8-antimatterium-org-profile-public-ecosystem-index-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile-v008

echo "=== VERIFY CONTROL PUBLIC ECOSYSTEM INDEX ==="
cd "$WORK/control-v018"
npm run verify:ecosystem-index

echo "=== VERIFY CORE ECOSYSTEM INDEX BACKLINK ==="
cd "$WORK/core-v0214"
npm run verify:ecosystem-index
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW ECOSYSTEM INDEX BACKLINK ==="
cd "$WORK/www-v0110"
npm run verify:ecosystem-index

echo "=== VERIFY ORG PROFILE ECOSYSTEM INDEX BACKLINK ==="
cd "$WORK/org-profile-v008"
npm run verify:ecosystem-index

echo "ANTIMATTERIUM_PUBLIC_ECOSYSTEM_INDEX_ECHO_AUDIT_PASS=true"
echo "ANTIMATTERIUM_PUBLIC_ECOSYSTEM_ECHO_GRAPH_CLOSED=true"
echo "ANTIMATTERIUM_MOVE1_SURFACE_ECHOES_REPLAYED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
