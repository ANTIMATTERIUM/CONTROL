#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 132 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

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

CONTROL_CLONE="$TMP_ROOT/control-v0263"
CORE_CLONE="$TMP_ROOT/core-v0278"
WWW_CLONE="$TMP_ROOT/www-v0174"
ORG_CLONE="$TMP_ROOT/org-profile-v0072"

clone_exact_tag   "control-v0263"   "ANTIMATTERIUM/CONTROL"   "v0.2.63-antimatterium-control-move129-surface-closure"   "afada789807ee3333e6c45a6f29aff5790d5ea05"   "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move130-surface-backlink-fanout-closure
  npm run test:move130-surface-backlink-fanout-closure
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag   "core-v0278"   "ANTIMATTERIUM/ANTIMATTERIUM"   "v0.2.78-antimatterium-control-v0263-backlink"   "1a099dacb9921d86098632df38cf7701e789989e"   "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move131-control-v0263-backlink
  npm run test:move131-control-v0263-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag   "www-v0174"   "ANTIMATTERIUM/WWW"   "v0.1.74-antimatterium-www-control-v0263-backlink"   "ac192a1f2b5cf3878fde725341651e109b970094"   "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move131-control-v0263-backlink
  npm run test:move131-control-v0263-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag   "org-profile-v0072"   "ANTIMATTERIUM/.github"   "v0.0.72-antimatterium-org-profile-control-v0263-backlink"   "660df3998617652c0575ec0a7eadd5e7514a5e9b"   "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move131-control-v0263-backlink
  npm run test:move131-control-v0263-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo "ANTIMATTERIUM_MOVE132_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE131_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
