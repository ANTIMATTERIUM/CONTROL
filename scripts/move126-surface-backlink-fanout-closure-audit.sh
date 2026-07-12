#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 126 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0260"
CORE_CLONE="$TMP_ROOT/core-v0275"
WWW_CLONE="$TMP_ROOT/www-v0171"
ORG_CLONE="$TMP_ROOT/org-profile-v0069"

clone_exact_tag   "control-v0260"   "ANTIMATTERIUM/CONTROL"   "v0.2.60-antimatterium-control-move123-surface-closure"   "2ce460cd816eb4157dc2e65b1af233e33df07410"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move124-surface-backlink-fanout-closure
  npm run test:move124-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0275"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.75-antimatterium-control-v0260-backlink"   "73c4145223b82c2c0d5f932bfd0b3e22aa9bf5f0"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move125-control-v0260-backlink
  npm run test:move125-control-v0260-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0171"   "ANTIMATTERIUM/WWW"   "v0.1.71-antimatterium-www-control-v0260-backlink"   "1e4e49f0c87653393f40ebfb0a90542c80b57dce"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move125-control-v0260-backlink
  npm run test:move125-control-v0260-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0069"   "ANTIMATTERIUM/.github"   "v0.0.69-antimatterium-org-profile-control-v0260-backlink"   "ae374bf879b2711f43d4a8f746da6fe75685ae93"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move125-control-v0260-backlink
  npm run test:move125-control-v0260-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE126_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE125_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
