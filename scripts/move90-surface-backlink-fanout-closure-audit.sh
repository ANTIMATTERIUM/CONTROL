#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 90 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --depth 1 --branch "$tag" "$repo" "$WORK/$dir" >/dev/null 2>&1
}

run_if_script() {
  local script="$1"
  if node -e 'const fs=require("fs"); const pkg=JSON.parse(fs.readFileSync("package.json","utf8")); process.exit(pkg.scripts && pkg.scripts[process.argv[1]] ? 0 : 1)' "$script"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

echo "=== CLONE control-v0242 ==="
clone_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.42-antimatterium-control-move87-surface-closure" "control-v0242"
cd "$WORK/control-v0242"
echo "=== VERIFY CONTROL v0.2.42 ==="
npm run verify:move88-surface-backlink-fanout-closure

echo "=== CLONE core-v0257 ==="
clone_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.57-antimatterium-control-v0242-backlink" "core-v0257"
cd "$WORK/core-v0257"
echo "=== VERIFY CORE v0.2.57 ==="
npm run verify:move89-control-v0242-backlink
npm run test:move89-control-v0242-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE www-v0153 ==="
clone_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.53-antimatterium-www-control-v0242-backlink" "www-v0153"
cd "$WORK/www-v0153"
echo "=== VERIFY WWW v0.1.53 ==="
npm run verify:move89-control-v0242-backlink
npm run test:move89-control-v0242-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE org-profile-v0051 ==="
clone_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.51-antimatterium-org-profile-control-v0242-backlink" "org-profile-v0051"
cd "$WORK/org-profile-v0051"
echo "=== VERIFY ORG PROFILE v0.0.51 ==="
npm run verify:move89-control-v0242-backlink
npm run test:move89-control-v0242-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE90_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE89_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
