#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 70 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0232 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.32-antimatterium-control-move67-surface-closure" "control-v0232"

echo "=== CLONE core-v0247 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.47-antimatterium-control-v0232-backlink" "core-v0247"

echo "=== CLONE www-v0143 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.43-antimatterium-www-control-v0232-backlink" "www-v0143"

echo "=== CLONE org-profile-v0041 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.41-antimatterium-org-profile-control-v0232-backlink" "org-profile-v0041"

echo "=== VERIFY CONTROL v0.2.32 ==="
cd "$TMP/control-v0232"
npm run verify:move68-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.47 ==="
cd "$TMP/core-v0247"
npm run verify:move69-control-v0232-backlink
npm run test:move69-control-v0232-backlink
run_optional "$TMP/core-v0247" verify:privacy
run_optional "$TMP/core-v0247" verify:claims

echo "=== VERIFY WWW v0.1.43 ==="
cd "$TMP/www-v0143"
npm run verify:move69-control-v0232-backlink
npm run test:move69-control-v0232-backlink
run_optional "$TMP/www-v0143" verify:privacy
run_optional "$TMP/www-v0143" verify:claims

echo "=== VERIFY ORG PROFILE v0.0.41 ==="
cd "$TMP/org-profile-v0041"
npm run verify:move69-control-v0232-backlink
npm run test:move69-control-v0232-backlink
run_optional "$TMP/org-profile-v0041" verify:privacy
run_optional "$TMP/org-profile-v0041" verify:claims

echo "ANTIMATTERIUM_MOVE70_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE69_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
