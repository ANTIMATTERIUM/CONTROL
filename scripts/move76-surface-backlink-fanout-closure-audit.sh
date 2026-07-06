#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 76 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_optional_script() {
  local alias="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$alias"; then
    npm run "$alias"
  else
    echo "SKIP_MISSING_SCRIPT=$alias"
  fi
}

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --quiet --depth 1 --branch "$tag" "https://github.com/$repo.git" "$TMP/$dir" || {
    git clone --quiet "https://github.com/$repo.git" "$TMP/$dir"
    git -C "$TMP/$dir" checkout "$tag"
  }
}

echo "=== CLONE control-v0235 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.35-antimatterium-control-move73-surface-closure" "control-v0235"

echo "=== CLONE core-v0250 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.50-antimatterium-control-v0235-backlink" "core-v0250"

echo "=== CLONE www-v0146 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.46-antimatterium-www-control-v0235-backlink" "www-v0146"

echo "=== CLONE org-profile-v0044 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.44-antimatterium-org-profile-control-v0235-backlink" "org-profile-v0044"

echo "=== VERIFY CONTROL v0.2.35 ==="
cd "$TMP/control-v0235"
npm run verify:move74-surface-backlink-fanout-closure

echo "=== VERIFY CORE v0.2.50 ==="
cd "$TMP/core-v0250"
npm run verify:move75-control-v0235-backlink
npm run test:move75-control-v0235-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== VERIFY WWW v0.1.46 ==="
cd "$TMP/www-v0146"
npm run verify:move75-control-v0235-backlink
npm run test:move75-control-v0235-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "=== VERIFY ORG PROFILE v0.0.44 ==="
cd "$TMP/org-profile-v0044"
npm run verify:move75-control-v0235-backlink
npm run test:move75-control-v0235-backlink
run_optional_script verify:privacy
run_optional_script verify:claims

echo "ANTIMATTERIUM_MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE75_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
