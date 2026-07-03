#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 50 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0222 ==="
git clone --depth 1 --branch v0.2.22-antimatterium-control-move47-surface-closure git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP/control-v0222" >/dev/null 2>&1

echo "=== CLONE core-v0237 ==="
git clone --depth 1 --branch v0.2.37-antimatterium-control-v0222-backlink git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0237" >/dev/null 2>&1

echo "=== CLONE www-v0133 ==="
git clone --depth 1 --branch v0.1.33-antimatterium-www-control-v0222-backlink git@github.com:ANTIMATTERIUM/WWW.git "$TMP/www-v0133" >/dev/null 2>&1

echo "=== CLONE org-profile-v0031 ==="
git clone --depth 1 --branch v0.0.31-antimatterium-org-profile-control-v0222-backlink git@github.com:ANTIMATTERIUM/.github.git "$TMP/org-profile-v0031" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.22 ==="
(
  cd "$TMP/control-v0222"
  npm run verify:move48-surface-backlink-fanout-closure
)

echo "=== VERIFY CORE v0.2.37 ==="
(
  cd "$TMP/core-v0237"
  npm run verify:move49-control-v0222-backlink
  npm run verify:privacy
  npm run verify:claims
)

echo "=== VERIFY WWW v0.1.33 ==="
(
  cd "$TMP/www-v0133"
  npm run verify:move49-control-v0222-backlink
)

echo "=== VERIFY ORG PROFILE v0.0.31 ==="
(
  cd "$TMP/org-profile-v0031"
  npm run verify:move49-control-v0222-backlink
)

echo "ANTIMATTERIUM_MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE49_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
