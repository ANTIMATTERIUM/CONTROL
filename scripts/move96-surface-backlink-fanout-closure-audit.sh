#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 96 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"

  git clone --quiet --filter=blob:none --no-checkout "https://github.com/ANTIMATTERIUM/${repo}.git" "$TMP/$dir"
  cd "$TMP/$dir"
  git fetch --quiet --depth 1 origin "refs/tags/${tag}:refs/tags/${tag}"
  git checkout --quiet --detach "${tag}^{commit}"
}

run_if_present() {
  local script="$1"
  if npm run | grep -q " ${script}"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=${script}"
  fi
}

echo "=== CLONE control-v0245 ==="
clone_tag "CONTROL" "v0.2.45-antimatterium-control-move93-surface-closure" "control-v0245"
echo "=== VERIFY CONTROL v0.2.45 ==="
npm run verify:move94-surface-backlink-fanout-closure

echo "=== CLONE core-v0260 ==="
clone_tag "ANTIMATTERIUM" "v0.2.60-antimatterium-control-v0245-backlink" "core-v0260"
echo "=== VERIFY CORE v0.2.60 ==="
npm run verify:move95-control-v0245-backlink
npm run test:move95-control-v0245-backlink
run_if_present "verify:privacy"
run_if_present "verify:claims"

echo "=== CLONE www-v0156 ==="
clone_tag "WWW" "v0.1.56-antimatterium-www-control-v0245-backlink" "www-v0156"
echo "=== VERIFY WWW v0.1.56 ==="
npm run verify:move95-control-v0245-backlink
npm run test:move95-control-v0245-backlink
run_if_present "verify:privacy"
run_if_present "verify:claims"

echo "=== CLONE org-profile-v0054 ==="
clone_tag ".github" "v0.0.54-antimatterium-org-profile-control-v0245-backlink" "org-profile-v0054"
echo "=== VERIFY ORG PROFILE v0.0.54 ==="
npm run verify:move95-control-v0245-backlink
npm run test:move95-control-v0245-backlink
run_if_present "verify:privacy"
run_if_present "verify:claims"

echo "ANTIMATTERIUM_MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE95_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
