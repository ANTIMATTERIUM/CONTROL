#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 140 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0267"
CORE_CLONE="$TMP_ROOT/core-v0282"
WWW_CLONE="$TMP_ROOT/www-v0178"
ORG_CLONE="$TMP_ROOT/org-profile-v0076"

clone_exact_tag   "control-v0267"   "ANTIMATTERIUM/CONTROL"   "v0.2.67-antimatterium-control-move137-surface-closure"   "3eaa90d7b8850687431a47a5c8419f4bca6bfb0c"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move138-surface-backlink-fanout-closure
  npm run test:move138-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0282"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.82-antimatterium-control-v0267-backlink"   "7589b01207d2a47e3532d75b4373341ac6da35db"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move139-control-v0267-backlink
  npm run test:move139-control-v0267-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0178"   "ANTIMATTERIUM/WWW"   "v0.1.78-antimatterium-www-control-v0267-backlink"   "5d115d4a240a2fa6f1b2dfeb35cbf8ded7ab38e7"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move139-control-v0267-backlink
  npm run test:move139-control-v0267-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0076"   "ANTIMATTERIUM/.github"   "v0.0.76-antimatterium-org-profile-control-v0267-backlink"   "d2435f312179e72fa1595a8f807a55f33b0f6232"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move139-control-v0267-backlink
  npm run test:move139-control-v0267-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE140_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE139_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
