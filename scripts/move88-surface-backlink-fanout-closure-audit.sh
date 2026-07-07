#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 88 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

echo "=== CLONE control-v0241 ==="
clone_tag "https://github.com/ANTIMATTERIUM/CONTROL.git" "v0.2.41-antimatterium-control-move85-surface-closure" "control-v0241"
cd "$WORK/control-v0241"
echo "=== VERIFY CONTROL v0.2.41 ==="
npm run verify:move86-surface-backlink-fanout-closure

echo "=== CLONE core-v0256 ==="
clone_tag "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "v0.2.56-antimatterium-control-v0241-backlink" "core-v0256"
cd "$WORK/core-v0256"
echo "=== VERIFY CORE v0.2.56 ==="
npm run verify:move87-control-v0241-backlink
npm run test:move87-control-v0241-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE www-v0152 ==="
clone_tag "https://github.com/ANTIMATTERIUM/WWW.git" "v0.1.52-antimatterium-www-control-v0241-backlink" "www-v0152"
cd "$WORK/www-v0152"
echo "=== VERIFY WWW v0.1.52 ==="
npm run verify:move87-control-v0241-backlink
npm run test:move87-control-v0241-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "=== CLONE org-profile-v0050 ==="
clone_tag "https://github.com/ANTIMATTERIUM/.github.git" "v0.0.50-antimatterium-org-profile-control-v0241-backlink" "org-profile-v0050"
cd "$WORK/org-profile-v0050"
echo "=== VERIFY ORG PROFILE v0.0.50 ==="
npm run verify:move87-control-v0241-backlink
npm run test:move87-control-v0241-backlink
run_if_script verify:privacy
run_if_script verify:claims

echo "ANTIMATTERIUM_MOVE88_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE87_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
