#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 98 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP"
}
trap cleanup EXIT

checkout_tag_commit() {
  local tag="$1"
  git fetch origin --tags >/dev/null 2>&1
  local sha
  sha="$(git rev-list -n 1 "$tag")"
  git checkout --detach "$sha" >/dev/null 2>&1
}

run_optional() {
  local script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)" "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0246 ==="
git clone --quiet https://github.com/ANTIMATTERIUM/CONTROL.git "$TMP/control-v0246"
cd "$TMP/control-v0246"
checkout_tag_commit "v0.2.46-antimatterium-control-move95-surface-closure"
echo "=== VERIFY CONTROL v0.2.46 ==="
npm run verify:move96-surface-backlink-fanout-closure

echo "=== CLONE core-v0261 ==="
git clone --quiet https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP/core-v0261"
cd "$TMP/core-v0261"
checkout_tag_commit "v0.2.61-antimatterium-control-v0246-backlink"
echo "=== VERIFY CORE v0.2.61 ==="
npm run verify:move97-control-v0246-backlink
npm run test:move97-control-v0246-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0157 ==="
git clone --quiet https://github.com/ANTIMATTERIUM/WWW.git "$TMP/www-v0157"
cd "$TMP/www-v0157"
checkout_tag_commit "v0.1.57-antimatterium-www-control-v0246-backlink"
echo "=== VERIFY WWW v0.1.57 ==="
npm run verify:move97-control-v0246-backlink
npm run test:move97-control-v0246-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0055 ==="
git clone --quiet https://github.com/ANTIMATTERIUM/.github.git "$TMP/org-profile-v0055"
cd "$TMP/org-profile-v0055"
checkout_tag_commit "v0.0.55-antimatterium-org-profile-control-v0246-backlink"
echo "=== VERIFY ORG PROFILE v0.0.55 ==="
npm run verify:move97-control-v0246-backlink
npm run test:move97-control-v0246-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE97_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
