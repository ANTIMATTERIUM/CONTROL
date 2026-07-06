#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 78 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0236 ==="
clone_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.36-antimatterium-control-move75-surface-closure" "control-v0236"
echo "=== VERIFY CONTROL v0.2.36 ==="
npm run verify:move76-surface-backlink-fanout-closure

echo "=== CLONE core-v0251 ==="
clone_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.51-antimatterium-control-v0236-backlink" "core-v0251"
echo "=== VERIFY CORE v0.2.51 ==="
npm run verify:move77-control-v0236-backlink
npm run test:move77-control-v0236-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE www-v0147 ==="
clone_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.47-antimatterium-www-control-v0236-backlink" "www-v0147"
echo "=== VERIFY WWW v0.1.47 ==="
npm run verify:move77-control-v0236-backlink
npm run test:move77-control-v0236-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE org-profile-v0045 ==="
clone_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.45-antimatterium-org-profile-control-v0236-backlink" "org-profile-v0045"
echo "=== VERIFY ORG PROFILE v0.0.45 ==="
npm run verify:move77-control-v0236-backlink
npm run test:move77-control-v0236-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "ANTIMATTERIUM_MOVE78_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE77_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
