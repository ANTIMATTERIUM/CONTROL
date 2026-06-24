#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM STRANGER FINAL AUDIT ==="

WORK="${TMPDIR:-/tmp}/antimatterium-stranger-final-audit"
rm -rf "$WORK"
mkdir -p "$WORK"

cd "$WORK"

echo "=== CLONE CONTROL v0.1.3 ==="
git clone --depth 1 --branch v0.1.3-antimatterium-control-bidirectional-public-closure https://github.com/ANTIMATTERIUM/CONTROL.git control

echo "=== CLONE CORE v0.2.12 ==="
git clone --depth 1 --branch v0.2.12-antimatterium-control-ci-evidence-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core

echo "=== CLONE WWW v0.1.8 ==="
git clone --depth 1 --branch v0.1.8-antimatterium-www-control-ci-evidence-backlink https://github.com/ANTIMATTERIUM/WWW.git www

echo "=== CLONE ORG PROFILE v0.0.6 ==="
git clone --depth 1 --branch v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile

echo "=== VERIFY CONTROL ==="
cd "$WORK/control"
npm run verify

echo "=== VERIFY CORE ==="
cd "$WORK/core"
npm run verify:control-ci-evidence
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW ==="
cd "$WORK/www"
npm run verify:control-ci-evidence

echo "=== VERIFY ORG PROFILE ==="
cd "$WORK/org-profile"
npm run verify:control-ci-evidence

echo "ANTIMATTERIUM_STRANGER_FINAL_AUDIT_PASS=true"
echo "ANTIMATTERIUM_BIDIRECTIONAL_PUBLIC_CHAIN_CLOSED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
