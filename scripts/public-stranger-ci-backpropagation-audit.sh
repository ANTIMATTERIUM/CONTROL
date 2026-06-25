#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM PUBLIC STRANGER CI BACKPROPAGATION AUDIT ==="

WORK="${TMPDIR:-/tmp}/antimatterium-public-stranger-ci-backpropagation-audit"
rm -rf "$WORK"
mkdir -p "$WORK"

cd "$WORK"

echo "=== CLONE CONTROL v0.1.6 ==="
git clone --depth 1 --branch v0.1.6-antimatterium-control-public-stranger-ci https://github.com/ANTIMATTERIUM/CONTROL.git control

echo "=== CLONE CORE v0.2.13 ==="
git clone --depth 1 --branch v0.2.13-antimatterium-public-stranger-ci-backlink https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git core

echo "=== CLONE WWW v0.1.9 ==="
git clone --depth 1 --branch v0.1.9-antimatterium-www-public-stranger-ci-backlink https://github.com/ANTIMATTERIUM/WWW.git www

echo "=== CLONE ORG PROFILE v0.0.7 ==="
git clone --depth 1 --branch v0.0.7-antimatterium-org-profile-public-stranger-ci-backlink https://github.com/ANTIMATTERIUM/.github.git org-profile

echo "=== VERIFY CONTROL PUBLIC STRANGER CI ==="
cd "$WORK/control"
npm run verify:public-stranger-ci

echo "=== VERIFY CORE PUBLIC STRANGER CI BACKLINK ==="
cd "$WORK/core"
npm run verify:public-stranger-ci
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW PUBLIC STRANGER CI BACKLINK ==="
cd "$WORK/www"
npm run verify:public-stranger-ci

echo "=== VERIFY ORG PROFILE PUBLIC STRANGER CI BACKLINK ==="
cd "$WORK/org-profile"
npm run verify:public-stranger-ci

echo "ANTIMATTERIUM_PUBLIC_STRANGER_CI_BACKPROPAGATION_AUDIT_PASS=true"
echo "ANTIMATTERIUM_SECOND_ORDER_PUBLIC_STRANGER_CI_LOOP_CLOSED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
