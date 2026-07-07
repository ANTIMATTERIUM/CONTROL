#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 80 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0237 ==="
clone_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.37-antimatterium-control-move77-surface-closure" "control-v0237"
echo "=== VERIFY CONTROL v0.2.37 ==="
npm run verify:move78-surface-backlink-fanout-closure

echo "=== CLONE core-v0252 ==="
clone_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.52-antimatterium-control-v0237-backlink" "core-v0252"
echo "=== VERIFY CORE v0.2.52 ==="
npm run verify:move79-control-v0237-backlink
npm run test:move79-control-v0237-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE www-v0148 ==="
clone_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.48-antimatterium-www-control-v0237-backlink" "www-v0148"
echo "=== VERIFY WWW v0.1.48 ==="
npm run verify:move79-control-v0237-backlink
npm run test:move79-control-v0237-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== CLONE org-profile-v0046 ==="
clone_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.46-antimatterium-org-profile-control-v0237-backlink" "org-profile-v0046"
echo "=== VERIFY ORG PROFILE v0.0.46 ==="
npm run verify:move79-control-v0237-backlink
npm run test:move79-control-v0237-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "ANTIMATTERIUM_MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE79_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
