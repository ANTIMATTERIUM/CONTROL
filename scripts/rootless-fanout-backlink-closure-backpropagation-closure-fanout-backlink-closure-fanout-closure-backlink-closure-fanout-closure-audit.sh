#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0210 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.10-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure" "$TMP/control-v0210"

echo "=== CLONE core-v0225 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.25-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/core-v0225"

echo "=== CLONE www-v0121 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.21-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/www-v0121"

echo "=== CLONE org-profile-v0019 ==="
checkout_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.19-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink" "$TMP/org-profile-v0019"

echo "=== VERIFY CONTROL v0.2.10 ==="
(cd "$TMP/control-v0210" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure)

echo "=== VERIFY CORE v0.2.25 ==="
(cd "$TMP/core-v0225" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure && npm run verify:privacy && npm run verify:claims)

echo "=== VERIFY WWW v0.1.21 ==="
(cd "$TMP/www-v0121" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure)

echo "=== VERIFY ORG PROFILE v0.0.19 ==="
(cd "$TMP/org-profile-v0019" && npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_CLOSED=true"
echo "ANTIMATTERIUM_MOVE25_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
