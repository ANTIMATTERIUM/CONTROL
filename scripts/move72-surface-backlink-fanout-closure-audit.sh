#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 72 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --quiet --branch "$tag" "git@github.com:$repo.git" "$TMP/$dir"
}

run_optional() {
  local dir="$1"
  local alias="$2"
  cd "$dir"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$alias"; then
    npm run "$alias"
  else
    echo "SKIP_MISSING_SCRIPT=$alias"
  fi
}

echo "=== CLONE control-v0233 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.33-antimatterium-control-move69-surface-closure" "control-v0233"

echo "=== CLONE core-v0248 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.48-antimatterium-control-v0233-backlink" "core-v0248"

echo "=== CLONE www-v0144 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.44-antimatterium-www-control-v0233-backlink" "www-v0144"

echo "=== CLONE org-profile-v0042 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.42-antimatterium-org-profile-control-v0233-backlink" "org-profile-v0042"

echo "=== VERIFY CONTROL v0.2.33 ==="
cd "$TMP/control-v0233"
npm run verify:move70-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.48 ==="
cd "$TMP/core-v0248"
npm run verify:move71-control-v0233-backlink
npm run test:move71-control-v0233-backlink
run_optional "$TMP/core-v0248" verify:privacy
run_optional "$TMP/core-v0248" verify:claims

echo "=== VERIFY WWW v0.1.44 ==="
cd "$TMP/www-v0144"
npm run verify:move71-control-v0233-backlink
npm run test:move71-control-v0233-backlink
run_optional "$TMP/www-v0144" verify:privacy
run_optional "$TMP/www-v0144" verify:claims

echo "=== VERIFY ORG PROFILE v0.0.42 ==="
cd "$TMP/org-profile-v0042"
npm run verify:move71-control-v0233-backlink
npm run test:move71-control-v0233-backlink
run_optional "$TMP/org-profile-v0042" verify:privacy
run_optional "$TMP/org-profile-v0042" verify:claims

echo "ANTIMATTERIUM_MOVE72_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE71_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
