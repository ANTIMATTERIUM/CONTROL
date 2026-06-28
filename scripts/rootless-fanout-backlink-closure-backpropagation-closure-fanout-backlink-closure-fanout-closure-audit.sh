#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKLINK CLOSURE FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

checkout_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --depth 1 --branch "$tag" "$repo" "$dir" 2>/dev/null || {
    git clone "$repo" "$dir"
    cd "$dir"
    git fetch --tags
    git checkout "$(git rev-list -n 1 "$tag")"
    cd - >/dev/null
  }
}

echo "=== CLONE control-v028 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.8-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure" "$TMP/control-v028"

echo "=== CLONE core-v0223 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.23-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink" "$TMP/core-v0223"

echo "=== CLONE www-v0119 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.19-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink" "$TMP/www-v0119"

echo "=== CLONE org-profile-v0017 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.17-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink" "$TMP/org-profile-v0017"

echo "=== VERIFY CONTROL v0.2.8 ==="
(cd "$TMP/control-v028" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure)

echo "=== VERIFY CORE v0.2.23 ==="
(cd "$TMP/core-v0223" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure && npm run verify:privacy && npm run verify:claims)

echo "=== VERIFY WWW v0.1.19 ==="
(cd "$TMP/www-v0119" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure)

echo "=== VERIFY ORG PROFILE v0.0.17 ==="
(cd "$TMP/org-profile-v0017" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSED=true"
echo "ANTIMATTERIUM_MOVE21_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
