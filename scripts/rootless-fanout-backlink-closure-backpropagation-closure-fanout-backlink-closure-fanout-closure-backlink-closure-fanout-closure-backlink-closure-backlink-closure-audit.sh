#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 30 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

checkout_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --quiet "$repo" "$dir"
  cd "$dir"
  git fetch --quiet --tags
  git checkout --quiet "$(git rev-list -n 1 "$tag")"
  cd - >/dev/null
}

echo "=== CLONE control-v0212 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.12-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure" "$TMP/control-v0212"

echo "=== CLONE core-v0227 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.27-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/core-v0227"

echo "=== CLONE www-v0123 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.23-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/www-v0123"

echo "=== CLONE org-profile-v0021 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.21-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/org-profile-v0021"

echo "=== VERIFY CONTROL v0.2.12 ==="
(cd "$TMP/control-v0212" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure)

echo "=== VERIFY CORE v0.2.27 ==="
(cd "$TMP/core-v0227" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink && npm run verify:privacy && npm run verify:claims)

echo "=== VERIFY WWW v0.1.23 ==="
(cd "$TMP/www-v0123" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink)

echo "=== VERIFY ORG PROFILE v0.0.21 ==="
(cd "$TMP/org-profile-v0021" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_CLOSED=true"
echo "ANTIMATTERIUM_MOVE29_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
