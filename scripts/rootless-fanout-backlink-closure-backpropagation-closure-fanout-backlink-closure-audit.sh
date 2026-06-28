#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKLINK CLOSURE BACKPROPAGATION CLOSURE FANOUT BACKLINK CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dst="$3"
  git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "$dst"
}

echo "=== CLONE control-v027 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.7-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure" "$TMP/control-v027"

echo "=== CLONE core-v0222 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.22-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink" "$TMP/core-v0222"

echo "=== CLONE www-v0118 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.18-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink" "$TMP/www-v0118"

echo "=== CLONE org-profile-v0016 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.16-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink" "$TMP/org-profile-v0016"

echo "=== VERIFY CONTROL v0.2.7 ==="
(
  cd "$TMP/control-v027"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure
)

echo "=== VERIFY CORE v0.2.22 ==="
(
  cd "$TMP/core-v0222"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure
  npm run verify:privacy
  npm run verify:claims
)

echo "=== VERIFY WWW v0.1.18 ==="
(
  cd "$TMP/www-v0118"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure
)

echo "=== VERIFY ORG PROFILE v0.0.16 ==="
(
  cd "$TMP/org-profile-v0016"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure
)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSED=true"
echo "ANTIMATTERIUM_MOVE19_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
