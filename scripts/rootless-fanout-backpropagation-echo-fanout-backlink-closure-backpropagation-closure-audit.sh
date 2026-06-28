#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM ROOTLESS FANOUT BACKPROPAGATION ECHO FANOUT BACKLINK CLOSURE BACKPROPAGATION CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_at_tag() {
  repo="$1"
  tag="$2"
  dst="$3"

  echo "=== CLONE $dst ==="
  git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "$TMP/$dst"
}

clone_at_tag "ANTIMATTERIUM/CONTROL" "v0.2.5-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure" "control-v025"
clone_at_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.20-antimatterium-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink" "core-v0220"
clone_at_tag "ANTIMATTERIUM/WWW" "v0.1.16-antimatterium-www-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink" "www-v0116"
clone_at_tag "ANTIMATTERIUM/.github" "v0.0.14-antimatterium-org-profile-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink" "org-profile-v0014"

echo "=== VERIFY CONTROL v0.2.5 ==="
(cd "$TMP/control-v025" && npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure)

echo "=== VERIFY CORE v0.2.20 ==="
(cd "$TMP/core-v0220" && npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure && npm run verify:privacy && npm run verify:claims)

echo "=== VERIFY WWW v0.1.16 ==="
(cd "$TMP/www-v0116" && npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure)

echo "=== VERIFY ORG PROFILE v0.0.14 ==="
(cd "$TMP/org-profile-v0014" && npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure)

echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSED=true"
echo "ANTIMATTERIUM_MOVE15_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
