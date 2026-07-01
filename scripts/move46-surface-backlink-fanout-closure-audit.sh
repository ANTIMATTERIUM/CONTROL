#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 46 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TMP_ROOT"' EXIT

checkout_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"

  git clone --quiet "$repo" "$dir"
  git -C "$dir" fetch --quiet --tags
  local commit
  commit="$(git -C "$dir" rev-list -n 1 "$tag")"
  git -C "$dir" checkout --quiet "$commit"
}

echo "=== CLONE control-v0220 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.20-antimatterium-control-move43-surface-closure" "$TMP_ROOT/control-v0220"

echo "=== CLONE core-v0235 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.35-antimatterium-control-v0220-backlink" "$TMP_ROOT/core-v0235"

echo "=== CLONE www-v0131 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.31-antimatterium-www-control-v0220-backlink" "$TMP_ROOT/www-v0131"

echo "=== CLONE org-profile-v0029 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.29-antimatterium-org-profile-control-v0220-backlink" "$TMP_ROOT/org-profile-v0029"

echo "=== VERIFY CONTROL v0.2.20 ==="
(
  cd "$TMP_ROOT/control-v0220"
  npm run verify:move44-surface-backlink-fanout-closure
)

echo "=== VERIFY CORE v0.2.35 ==="
(
  cd "$TMP_ROOT/core-v0235"
  npm run verify:move45-control-v0220-backlink
  npm run verify:privacy
  npm run verify:claims
)

echo "=== VERIFY WWW v0.1.31 ==="
(
  cd "$TMP_ROOT/www-v0131"
  npm run verify:move45-control-v0220-backlink
)

echo "=== VERIFY ORG PROFILE v0.0.29 ==="
(
  cd "$TMP_ROOT/org-profile-v0029"
  npm run verify:move45-control-v0220-backlink
)

echo "ANTIMATTERIUM_MOVE46_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE45_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
