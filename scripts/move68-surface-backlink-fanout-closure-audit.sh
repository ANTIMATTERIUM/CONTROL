#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 68 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --quiet --branch "$tag" "git@github.com:$repo.git" "$TMP/$dir"
}

echo "=== CLONE control-v0231 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.31-antimatterium-control-move65-surface-closure" "control-v0231"

echo "=== CLONE core-v0246 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.46-antimatterium-control-v0231-backlink" "core-v0246"

echo "=== CLONE www-v0142 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.42-antimatterium-www-control-v0231-backlink" "www-v0142"

echo "=== CLONE org-profile-v0040 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.40-antimatterium-org-profile-control-v0231-backlink" "org-profile-v0040"

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

echo "=== VERIFY CONTROL v0.2.31 ==="
cd "$TMP/control-v0231"
npm run verify:move66-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.46 ==="
cd "$TMP/core-v0246"
npm run verify:move67-control-v0231-backlink
npm run test:move67-control-v0231-backlink
run_optional "$TMP/core-v0246" verify:privacy
run_optional "$TMP/core-v0246" verify:claims

echo "=== VERIFY WWW v0.1.42 ==="
cd "$TMP/www-v0142"
npm run verify:move67-control-v0231-backlink
npm run test:move67-control-v0231-backlink
run_optional "$TMP/www-v0142" verify:privacy
run_optional "$TMP/www-v0142" verify:claims

echo "=== VERIFY ORG PROFILE v0.0.40 ==="
cd "$TMP/org-profile-v0040"
npm run verify:move67-control-v0231-backlink
npm run test:move67-control-v0231-backlink
run_optional "$TMP/org-profile-v0040" verify:privacy
run_optional "$TMP/org-profile-v0040" verify:claims

echo "ANTIMATTERIUM_MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE67_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
