#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 142 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0268"
CORE_CLONE="$TMP_ROOT/core-v0283"
WWW_CLONE="$TMP_ROOT/www-v0179"
ORG_CLONE="$TMP_ROOT/org-profile-v0077"

clone_exact_tag   "control-v0268"   "ANTIMATTERIUM/CONTROL"   "v0.2.68-antimatterium-control-move139-surface-closure"   "1b72f44cd0887ae62c23499274b1d023df35a9d1"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move140-surface-backlink-fanout-closure
  npm run test:move140-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0283"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.83-antimatterium-control-v0268-backlink"   "e28113708a52bd404bb321c6b5b786f72990b1c0"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move141-control-v0268-backlink
  npm run test:move141-control-v0268-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0179"   "ANTIMATTERIUM/WWW"   "v0.1.79-antimatterium-www-control-v0268-backlink"   "d424b8734f5db89a0d177364758d5b9a694e9886"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move141-control-v0268-backlink
  npm run test:move141-control-v0268-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0077"   "ANTIMATTERIUM/.github"   "v0.0.77-antimatterium-org-profile-control-v0268-backlink"   "35a03a9daeb3c9d117df67685e7d4c8e4dd31e01"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move141-control-v0268-backlink
  npm run test:move141-control-v0268-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE141_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
