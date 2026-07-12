#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 130 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0262"
CORE_CLONE="$TMP_ROOT/core-v0277"
WWW_CLONE="$TMP_ROOT/www-v0173"
ORG_CLONE="$TMP_ROOT/org-profile-v0071"

clone_exact_tag   "control-v0262"   "ANTIMATTERIUM/CONTROL"   "v0.2.62-antimatterium-control-move127-surface-closure"   "3e4e046ac5c477526c4c67695f8ee4cb41a3be48"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move128-surface-backlink-fanout-closure
  npm run test:move128-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0277"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.77-antimatterium-control-v0262-backlink"   "0900e59b056c13d647bf2b1f8cbee0a053afc1d8"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move129-control-v0262-backlink
  npm run test:move129-control-v0262-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0173"   "ANTIMATTERIUM/WWW"   "v0.1.73-antimatterium-www-control-v0262-backlink"   "dd002a924b8d9d60a7dc162f965620a141c02d2f"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move129-control-v0262-backlink
  npm run test:move129-control-v0262-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0071"   "ANTIMATTERIUM/.github"   "v0.0.71-antimatterium-org-profile-control-v0262-backlink"   "912cb148aac876584773fa0667d5b25cf8fcce65"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move129-control-v0262-backlink
  npm run test:move129-control-v0262-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE130_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE129_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
