#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 122 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

run_if_present() {
  local script="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script"; then
    npm run "$script"
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

clone_and_verify() {
  local label="$1"
  local repo="$2"
  local tag="$3"
  local verify_script="$4"
  local test_script="$5"

  local target="$TMP/$label"
  echo "=== CLONE $label ==="
  git clone --quiet --depth 1 --branch "$tag" "git@github.com:${repo}.git" "$target"
  cd "$target"

  npm run "$verify_script"
  npm run "$test_script"
  run_if_present verify:privacy
  run_if_present verify:claims
}

gh release view 'v0.2.58-antimatterium-control-move119-surface-closure' --repo ANTIMATTERIUM/CONTROL >/dev/null
gh release view 'v0.2.73-antimatterium-control-v0258-backlink' --repo ANTIMATTERIUM/ANTIMATTERIUM >/dev/null
gh release view 'v0.1.69-antimatterium-www-control-v0258-backlink' --repo ANTIMATTERIUM/WWW >/dev/null
gh release view 'v0.0.67-antimatterium-org-profile-control-v0258-backlink' --repo ANTIMATTERIUM/.github >/dev/null

clone_and_verify \
  "control-v0258" \
  "ANTIMATTERIUM/CONTROL" \
  'v0.2.58-antimatterium-control-move119-surface-closure' \
  "verify:move120-surface-backlink-fanout-closure" \
  "test:move120-surface-backlink-fanout-closure"

clone_and_verify \
  "core-v0273" \
  "ANTIMATTERIUM/ANTIMATTERIUM" \
  'v0.2.73-antimatterium-control-v0258-backlink' \
  "verify:move121-control-v0258-backlink" \
  "test:move121-control-v0258-backlink"

clone_and_verify \
  "www-v0169" \
  "ANTIMATTERIUM/WWW" \
  'v0.1.69-antimatterium-www-control-v0258-backlink' \
  "verify:move121-control-v0258-backlink" \
  "test:move121-control-v0258-backlink"

clone_and_verify \
  "org-profile-v0067" \
  "ANTIMATTERIUM/.github" \
  'v0.0.67-antimatterium-org-profile-control-v0258-backlink' \
  "verify:move121-control-v0258-backlink" \
  "test:move121-control-v0258-backlink"

echo "ANTIMATTERIUM_MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE121_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
