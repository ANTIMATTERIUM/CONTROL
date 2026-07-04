#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 64 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

run_if_script() {
  local script_name="$1"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$script_name"; then
    npm run "$script_name"
  else
    echo "SKIP_MISSING_SCRIPT=$script_name"
  fi
}

echo "=== CLONE control-v0229 ==="
git clone --depth 1 --branch "v0.2.29-antimatterium-control-move61-surface-closure" git@github.com:ANTIMATTERIUM/CONTROL.git "$TMP_DIR/control-v0229" >/dev/null 2>&1

echo "=== CLONE core-v0244 ==="
git clone --depth 1 --branch "v0.2.44-antimatterium-control-v0229-backlink" git@github.com:ANTIMATTERIUM/ANTIMATTERIUM.git "$TMP_DIR/core-v0244" >/dev/null 2>&1

echo "=== CLONE www-v0140 ==="
git clone --depth 1 --branch "v0.1.40-antimatterium-www-control-v0229-backlink" git@github.com:ANTIMATTERIUM/WWW.git "$TMP_DIR/www-v0140" >/dev/null 2>&1

echo "=== CLONE org-profile-v0038 ==="
git clone --depth 1 --branch "v0.0.38-antimatterium-org-profile-control-v0229-backlink" git@github.com:ANTIMATTERIUM/.github.git "$TMP_DIR/org-profile-v0038" >/dev/null 2>&1

echo "=== VERIFY CONTROL v0.2.29 ==="
(
  cd "$TMP_DIR/control-v0229"
  npm run verify:move62-surface-backlink-fanout-closure
)

echo "=== VERIFY CORE v0.2.44 ==="
(
  cd "$TMP_DIR/core-v0244"
  npm run verify:move63-control-v0229-backlink
  npm run test:move63-control-v0229-backlink
  run_if_script verify:privacy
  run_if_script verify:claims
)

echo "=== VERIFY WWW v0.1.40 ==="
(
  cd "$TMP_DIR/www-v0140"
  npm run verify:move63-control-v0229-backlink
  npm run test:move63-control-v0229-backlink
  run_if_script verify:privacy
  run_if_script verify:claims
)

echo "=== VERIFY ORG PROFILE v0.0.38 ==="
(
  cd "$TMP_DIR/org-profile-v0038"
  npm run verify:move63-control-v0229-backlink
  npm run test:move63-control-v0229-backlink
  run_if_script verify:privacy
  run_if_script verify:claims
)

echo "ANTIMATTERIUM_MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE63_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
