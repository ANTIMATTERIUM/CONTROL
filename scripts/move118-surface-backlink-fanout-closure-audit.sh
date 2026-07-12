#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 118 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

run_optional_script() {
  local script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts['$script_name'] ? 0 : 1)"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

checkout_tag_commit() {
  local tag="$1"
  git checkout "${tag}^{commit}" || git checkout "$tag"
}

echo "=== CLONE control-v0256 ==="
git clone "https://github.com/ANTIMATTERIUM/CONTROL.git" "$TMPDIR/control-v0256"
cd "$TMPDIR/control-v0256"
checkout_tag_commit "v0.2.56-antimatterium-control-move115-surface-closure"
echo "=== VERIFY CONTROL v0.2.56 ==="
npm run verify:move116-surface-backlink-fanout-closure

echo "=== CLONE core-v0271 ==="
git clone "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "$TMPDIR/core-v0271"
cd "$TMPDIR/core-v0271"
checkout_tag_commit "v0.2.71-antimatterium-control-v0256-backlink"
echo "=== VERIFY CORE v0.2.71 ==="
npm run verify:move117-control-v0256-backlink
npm run test:move117-control-v0256-backlink
run_optional_script "verify:privacy"
run_optional_script "verify:claims"

echo "=== CLONE www-v0167 ==="
git clone "https://github.com/ANTIMATTERIUM/WWW.git" "$TMPDIR/www-v0167"
cd "$TMPDIR/www-v0167"
checkout_tag_commit "v0.1.67-antimatterium-www-control-v0256-backlink"
echo "=== VERIFY WWW v0.1.67 ==="
npm run verify:move117-control-v0256-backlink
npm run test:move117-control-v0256-backlink
run_optional_script "verify:privacy"
run_optional_script "verify:claims"

echo "=== CLONE org-profile-v0065 ==="
git clone "https://github.com/ANTIMATTERIUM/.github.git" "$TMPDIR/org-profile-v0065"
cd "$TMPDIR/org-profile-v0065"
checkout_tag_commit "v0.0.65-antimatterium-org-profile-control-v0256-backlink"
echo "=== VERIFY ORG PROFILE v0.0.65 ==="
npm run verify:move117-control-v0256-backlink
npm run test:move117-control-v0256-backlink
run_optional_script "verify:privacy"
run_optional_script "verify:claims"

echo "ANTIMATTERIUM_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE117_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
