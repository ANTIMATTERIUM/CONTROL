#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 106 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

run_optional() {
  local script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)" "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

checkout_tag_commit() {
  local tag="$1"
  local sha
  sha="$(git rev-list -n 1 "$tag")"
  git checkout --detach "$sha" >/dev/null
}

echo "=== CLONE control-v0250 ==="
git clone "git@github.com:ANTIMATTERIUM/CONTROL.git" "$TMP_DIR/control-v0250"
cd "$TMP_DIR/control-v0250"
checkout_tag_commit "v0.2.50-antimatterium-control-move103-surface-closure"
echo "=== VERIFY CONTROL v0.2.50 ==="
npm run verify:move104-surface-backlink-fanout-closure

echo "=== CLONE core-v0265 ==="
git clone "git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git" "$TMP_DIR/core-v0265"
cd "$TMP_DIR/core-v0265"
checkout_tag_commit "v0.2.65-antimatterium-control-v0250-backlink"
echo "=== VERIFY CORE v0.2.65 ==="
npm run verify:move105-control-v0250-backlink
npm run test:move105-control-v0250-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0161 ==="
git clone "git@github.com:ANTIMATTERIUM/WWW.git" "$TMP_DIR/www-v0161"
cd "$TMP_DIR/www-v0161"
checkout_tag_commit "v0.1.61-antimatterium-www-control-v0250-backlink"
echo "=== VERIFY WWW v0.1.61 ==="
npm run verify:move105-control-v0250-backlink
npm run test:move105-control-v0250-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0059 ==="
git clone "git@github.com:ANTIMATTERIUM/.github.git" "$TMP_DIR/org-profile-v0059"
cd "$TMP_DIR/org-profile-v0059"
checkout_tag_commit "v0.0.59-antimatterium-org-profile-control-v0250-backlink"
echo "=== VERIFY ORG PROFILE v0.0.59 ==="
npm run verify:move105-control-v0250-backlink
npm run test:move105-control-v0250-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE106_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE105_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
