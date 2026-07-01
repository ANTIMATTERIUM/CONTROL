#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 48 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_at_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"

  git clone --quiet --depth 1 --branch "$tag" "https://github.com/$repo.git" "$dir" 2>/dev/null || {
    git clone --quiet "https://github.com/$repo.git" "$dir"
    cd "$dir"
    git fetch --quiet --tags
    git checkout --quiet "$(git rev-list -n 1 "$tag")"
    cd - >/dev/null
  }
}

echo "=== CLONE control-v0221 ==="
clone_at_tag "ANTIMATTERIUM/CONTROL" "v0.2.21-antimatterium-control-move45-surface-closure" "$TMP/control-v0221"

echo "=== CLONE core-v0236 ==="
clone_at_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.36-antimatterium-control-v0221-backlink" "$TMP/core-v0236"

echo "=== CLONE www-v0132 ==="
clone_at_tag "ANTIMATTERIUM/WWW" "v0.1.32-antimatterium-www-control-v0221-backlink" "$TMP/www-v0132"

echo "=== CLONE org-profile-v0030 ==="
clone_at_tag "ANTIMATTERIUM/.github" "v0.0.30-antimatterium-org-profile-control-v0221-backlink" "$TMP/org-profile-v0030"

echo "=== VERIFY CONTROL v0.2.21 ==="
cd "$TMP/control-v0221"
npm run verify:move46-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.36 ==="
cd "$TMP/core-v0236"
npm run verify:move47-control-v0221-backlink
npm run verify:privacy
npm run verify:claims

echo "=== VERIFY WWW v0.1.32 ==="
cd "$TMP/www-v0132"
npm run verify:move47-control-v0221-backlink

echo "=== VERIFY ORG PROFILE v0.0.30 ==="
cd "$TMP/org-profile-v0030"
npm run verify:move47-control-v0221-backlink

echo "ANTIMATTERIUM_MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE47_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
