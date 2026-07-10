#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 94 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/antimatterium-move94-audit.XXXXXX")"
trap 'rm -rf "$TMP_DIR"' EXIT

checkout_tag_commit() {
  repo="$1"
  tag="$2"
  dir="$3"
  git clone --quiet "https://github.com/$repo.git" "$dir"
  cd "$dir"
  git fetch --quiet origin "refs/tags/$tag:refs/tags/$tag"
  commit="$(git rev-list -n 1 "$tag")"
  git checkout --quiet "$commit"
}

run_optional() {
  script_name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)" "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0244 ==="
checkout_tag_commit "ANTIMATTERIUM/CONTROL" "v0.2.44-antimatterium-control-move91-surface-closure" "$TMP_DIR/control-v0244"
echo "=== VERIFY CONTROL v0.2.44 ==="
npm run verify:move92-surface-backlink-fanout-closure

echo "=== CLONE core-v0259 ==="
checkout_tag_commit "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.59-antimatterium-control-v0244-backlink" "$TMP_DIR/core-v0259"
echo "=== VERIFY CORE v0.2.59 ==="
npm run verify:move93-control-v0244-backlink
npm run test:move93-control-v0244-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE www-v0155 ==="
checkout_tag_commit "ANTIMATTERIUM/WWW" "v0.1.55-antimatterium-www-control-v0244-backlink" "$TMP_DIR/www-v0155"
echo "=== VERIFY WWW v0.1.55 ==="
npm run verify:move93-control-v0244-backlink
npm run test:move93-control-v0244-backlink
run_optional verify:privacy
run_optional verify:claims

echo "=== CLONE org-profile-v0053 ==="
checkout_tag_commit "ANTIMATTERIUM/.github" "v0.0.53-antimatterium-org-profile-control-v0244-backlink" "$TMP_DIR/org-profile-v0053"
echo "=== VERIFY ORG PROFILE v0.0.53 ==="
npm run verify:move93-control-v0244-backlink
npm run test:move93-control-v0244-backlink
run_optional verify:privacy
run_optional verify:claims

echo "ANTIMATTERIUM_MOVE94_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE93_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
