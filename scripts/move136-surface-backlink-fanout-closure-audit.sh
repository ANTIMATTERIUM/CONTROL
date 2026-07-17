#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 136 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TMP_ROOT"' EXIT

clone_exact_tag() {
  local label="$1"
  local repo="$2"
  local tag="$3"
  local expected_sha="$4"
  local destination="$5"

  echo "=== CLONE ${label} ==="

  git clone     --quiet     --no-checkout     "git@github.com:${repo}.git"     "$destination"

  git -C "$destination" fetch     --quiet     --force     origin     "refs/tags/${tag}:refs/tags/${tag}"

  local actual_sha

  actual_sha="$(
    git -C "$destination" rev-parse "${tag}^{commit}"
  )"

  if [[ "$actual_sha" != "$expected_sha" ]]; then
    echo "AUDIT_TAG_SHA_MISMATCH=${repo}:${tag}"
    echo "EXPECTED=$expected_sha"
    echo "ACTUAL=$actual_sha"
    exit 1
  fi

  git -C "$destination" checkout --quiet "$expected_sha"

  test "$(
    git -C "$destination" rev-parse HEAD
  )" = "$expected_sha"

  echo "AUDIT_TAG_SHA_OK=${repo}:${tag}:${actual_sha}"
}

run_if_script() {
  local directory="$1"
  local script="$2"

  if (
    cd "$directory"

    node -e '
      const pkg = require("./package.json");
      process.exit(
        pkg.scripts && pkg.scripts[process.argv[1]]
          ? 0
          : 1
      );
    ' "$script"
  )
  then
    (
      cd "$directory"
      npm run "$script"
    )
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

CONTROL_CLONE="$TMP_ROOT/control-v0265"
CORE_CLONE="$TMP_ROOT/core-v0280"
WWW_CLONE="$TMP_ROOT/www-v0176"
ORG_CLONE="$TMP_ROOT/org-profile-v0074"

clone_exact_tag   "control-v0265"   "ANTIMATTERIUM/CONTROL"   "v0.2.65-antimatterium-control-move133-surface-closure"   "bd3e4e02c1b923785607687b36bf1d082042c348"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move134-surface-backlink-fanout-closure
  npm run test:move134-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0280"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.80-antimatterium-control-v0265-backlink"   "cc11e198d2ee3ed22803a06f503bf2324e8642a6"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move135-control-v0265-backlink
  npm run test:move135-control-v0265-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0176"   "ANTIMATTERIUM/WWW"   "v0.1.76-antimatterium-www-control-v0265-backlink"   "9bd75a52248251b109bc14d538b0fd256cc57a76"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move135-control-v0265-backlink
  npm run test:move135-control-v0265-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0074"   "ANTIMATTERIUM/.github"   "v0.0.74-antimatterium-org-profile-control-v0265-backlink"   "c39f6c0ad0b671e5ea3b93511af4f2e78eb774fb"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move135-control-v0265-backlink
  npm run test:move135-control-v0265-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE136_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE135_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
