#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKLINK CLOSURE BACKPROPAGATION CLOSURE FANOUT CLOSURE AUDIT ==="

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  echo "=== CLONE $dir ==="
  git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "$tmp/$dir"
}

clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure" "control-v026"
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.21-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-backlink" "core-v0221"
clone_tag "ANTIMATTERIUM/WWW" "v0.1.17-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-backlink" "www-v0117"
clone_tag "ANTIMATTERIUM/.github" "v0.0.15-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-backlink" "org-profile-v0015"

echo "=== VERIFY CONTROL v0.2.6 ==="
(
  cd "$tmp/control-v026"
  npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure
)

echo "=== VERIFY CORE v0.2.21 ==="
(
  cd "$tmp/core-v0221"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure
  npm run verify:privacy
  npm run verify:claims
)

echo "=== VERIFY WWW v0.1.17 ==="
(
  cd "$tmp/www-v0117"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure
)

echo "=== VERIFY ORG PROFILE v0.0.15 ==="
(
  cd "$tmp/org-profile-v0015"
  npm run verify:rootless-fanout-backlink-closure-backpropagation-closure
)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSED=true"
echo "ANTIMATTERIUM_MOVE17_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
