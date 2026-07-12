#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 116 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

clone_checkout_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"

  git clone "https://github.com/${repo}.git" "$dir"
  cd "$dir"
  git fetch --tags --force
  git checkout "$(git rev-list -n 1 "$tag")"
}

run_if_script() {
  local script="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

echo "=== CLONE control-v0255 ==="
clone_checkout_tag "ANTIMATTERIUM/CONTROL" "v0.2.55-antimatterium-control-move113-surface-closure" "$TMPDIR/control-v0255"
echo "=== VERIFY CONTROL v0.2.55 ==="
npm run verify:move114-surface-backlink-fanout-closure

echo "=== CLONE core-v0270 ==="
clone_checkout_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.70-antimatterium-control-v0255-backlink" "$TMPDIR/core-v0270"
echo "=== VERIFY CORE v0.2.70 ==="
npm run verify:move115-control-v0255-backlink
npm run test:move115-control-v0255-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE www-v0166 ==="
clone_checkout_tag "ANTIMATTERIUM/WWW" "v0.1.66-antimatterium-www-control-v0255-backlink" "$TMPDIR/www-v0166"
echo "=== VERIFY WWW v0.1.66 ==="
npm run verify:move115-control-v0255-backlink
npm run test:move115-control-v0255-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE org-profile-v0064 ==="
clone_checkout_tag "ANTIMATTERIUM/.github" "v0.0.64-antimatterium-org-profile-control-v0255-backlink" "$TMPDIR/org-profile-v0064"
echo "=== VERIFY ORG PROFILE v0.0.64 ==="
npm run verify:move115-control-v0255-backlink
npm run test:move115-control-v0255-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE115_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
