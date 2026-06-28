#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKPROPAGATION ECHO FANOUT BACKLINK CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  repo="$1"
  tag="$2"
  dir="$3"
  echo "=== CLONE $dir ==="
  git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "$TMP/$dir"
}

clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.4-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-closure" "control-v024"
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.19-antimatterium-rootless-fanout-backpropagation-echo-fanout-closure-backlink" "core-v0219"
clone_tag "ANTIMATTERIUM/WWW" "v0.1.15-antimatterium-www-rootless-fanout-backpropagation-echo-fanout-closure-backlink" "www-v0115"
clone_tag "ANTIMATTERIUM/.github" "v0.0.13-antimatterium-org-profile-rootless-fanout-backpropagation-echo-fanout-closure-backlink" "org-profile-v0013"

echo "=== VERIFY CONTROL v0.2.4 ==="
(
  cd "$TMP/control-v024"
  npm run verify:rootless-fanout-backpropagation-echo-fanout-closure
)

echo "=== VERIFY CORE v0.2.19 ==="
(
  cd "$TMP/core-v0219"
  npm run verify:rootless-fanout-backpropagation-echo-fanout-closure
  npm run verify:privacy
  npm run verify:claims
)

echo "=== VERIFY WWW v0.1.15 ==="
(
  cd "$TMP/www-v0115"
  npm run verify:rootless-fanout-backpropagation-echo-fanout-closure
)

echo "=== VERIFY ORG PROFILE v0.0.13 ==="
(
  cd "$TMP/org-profile-v0013"
  npm run verify:rootless-fanout-backpropagation-echo-fanout-closure
)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKPROPAGATION_CLOSED=true"
echo "ANTIMATTERIUM_MOVE13_SURFACE_ECHOES_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
