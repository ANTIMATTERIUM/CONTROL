#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 134 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0264"
CORE_CLONE="$TMP_ROOT/core-v0279"
WWW_CLONE="$TMP_ROOT/www-v0175"
ORG_CLONE="$TMP_ROOT/org-profile-v0073"

clone_exact_tag   "control-v0264"   "ANTIMATTERIUM/CONTROL"   "v0.2.64-antimatterium-control-move131-surface-closure"   "29f697a9c6711b9338794fb4ccde24b90d0590f5"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move132-surface-backlink-fanout-closure
  npm run test:move132-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0279"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.79-antimatterium-control-v0264-backlink"   "b3ceb9bced2f06f51573328ca13d0da6fd8697e4"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move133-control-v0264-backlink
  npm run test:move133-control-v0264-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0175"   "ANTIMATTERIUM/WWW"   "v0.1.75-antimatterium-www-control-v0264-backlink"   "cdcecd41dd65cc92092100c69f93a2ec8acc9f4b"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move133-control-v0264-backlink
  npm run test:move133-control-v0264-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0073"   "ANTIMATTERIUM/.github"   "v0.0.73-antimatterium-org-profile-control-v0264-backlink"   "714aee9417abe51f79a114c71fdbf5fb7b3cff71"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move133-control-v0264-backlink
  npm run test:move133-control-v0264-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE134_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE133_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
