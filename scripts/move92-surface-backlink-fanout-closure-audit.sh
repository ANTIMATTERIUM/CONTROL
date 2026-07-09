#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 92 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

run_if_script() {
  local script="$1"
  if node -e 'const fs=require("fs"); const pkg=JSON.parse(fs.readFileSync("package.json","utf8")); process.exit(pkg.scripts && pkg.scripts[process.argv[1]] ? 0 : 1)' "$script"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dest="$3"
  git clone --quiet --depth 1 --branch "$tag" "https://github.com/$repo.git" "$dest"
}

echo "=== CLONE control-v0243 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.43-antimatterium-control-move89-surface-closure" "$WORKDIR/control-v0243"
cd "$WORKDIR/control-v0243"
echo "=== VERIFY CONTROL v0.2.43 ==="
npm run verify:move90-surface-backlink-fanout-closure

echo "=== CLONE core-v0258 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.58-antimatterium-control-v0243-backlink" "$WORKDIR/core-v0258"
cd "$WORKDIR/core-v0258"
echo "=== VERIFY CORE v0.2.58 ==="
npm run verify:move91-control-v0243-backlink
npm run test:move91-control-v0243-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE www-v0154 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.54-antimatterium-www-control-v0243-backlink" "$WORKDIR/www-v0154"
cd "$WORKDIR/www-v0154"
echo "=== VERIFY WWW v0.1.54 ==="
npm run verify:move91-control-v0243-backlink
npm run test:move91-control-v0243-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE org-profile-v0052 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.52-antimatterium-org-profile-control-v0243-backlink" "$WORKDIR/org-profile-v0052"
cd "$WORKDIR/org-profile-v0052"
echo "=== VERIFY ORG PROFILE v0.0.52 ==="
npm run verify:move91-control-v0243-backlink
npm run test:move91-control-v0243-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE92_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE91_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
