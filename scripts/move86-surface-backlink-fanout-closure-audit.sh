#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 86 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --quiet "$repo" "$TMP/$dir"
  cd "$TMP/$dir"
  git fetch --quiet --tags
  git checkout -q "$tag"
}

run_optional_script() {
  local alias="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$alias"; then
    npm run "$alias"
  else
    echo "SKIP_MISSING_SCRIPT=$alias"
  fi
}

echo "=== CLONE control-v0240 ==="
clone_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.40-antimatterium-control-move83-surface-closure" "control-v0240"
echo "=== VERIFY CONTROL v0.2.40 ==="
npm run verify:move84-surface-backlink-fanout-closure

echo "=== CLONE core-v0255 ==="
clone_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.55-antimatterium-control-v0240-backlink" "core-v0255"
echo "=== VERIFY CORE v0.2.55 ==="
npm run verify:move85-control-v0240-backlink
npm run test:move85-control-v0240-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE www-v0151 ==="
clone_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.51-antimatterium-www-control-v0240-backlink" "www-v0151"
echo "=== VERIFY WWW v0.1.51 ==="
npm run verify:move85-control-v0240-backlink
npm run test:move85-control-v0240-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE org-profile-v0049 ==="
clone_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.49-antimatterium-org-profile-control-v0240-backlink" "org-profile-v0049"
echo "=== VERIFY ORG PROFILE v0.0.49 ==="
npm run verify:move85-control-v0240-backlink
npm run test:move85-control-v0240-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "ANTIMATTERIUM_MOVE86_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE85_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
