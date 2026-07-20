#!/usr/bin/env bash
set -euo pipefail

echo '=== ANTIMATTERIUM MOVE 144 ADDITIVE ORDINAL ONTOLOGY CORRECTION AUDIT ==='

TMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TMP_ROOT"' EXIT

clone_exact_tag() {
  local label="$1"
  local repo="$2"
  local tag="$3"
  local expected_sha="$4"
  local destination="$5"

  echo "=== CLONE ${label} ==="

  git clone --quiet --no-checkout "git@github.com:${repo}.git" "$destination"
  git -C "$destination" fetch \
    --quiet \
    --force \
    origin \
    "refs/tags/${tag}:refs/tags/${tag}"

  local actual_sha
  actual_sha="$(git -C "$destination" rev-parse "${tag}^{commit}")"

  if [[ "$actual_sha" != "$expected_sha" ]]; then
    echo "MOVE144_AUDIT_TAG_SHA_MISMATCH=${repo}:${tag}"
    echo "EXPECTED=$expected_sha"
    echo "ACTUAL=$actual_sha"
    exit 1
  fi

  git -C "$destination" checkout --quiet "$expected_sha"
  test "$(git -C "$destination" rev-parse HEAD)" = "$expected_sha"

  echo "MOVE144_AUDIT_TAG_SHA_OK=${repo}:${tag}:${actual_sha}"
}

run_if_script() {
  local directory="$1"
  local script="$2"

  if (
    cd "$directory"
    node -e '
      const pkg = require("./package.json");
      process.exit(
        pkg.scripts && pkg.scripts[process.argv[1]] ? 0 : 1
      );
    ' "$script"
  ); then
    (
      cd "$directory"
      npm run "$script"
    )
  else
    echo "SKIP_MISSING_SCRIPT=$script"
  fi
}

CONTROL_CLONE="$TMP_ROOT/control-v0269"
CORE_CLONE="$TMP_ROOT/core-v0284"
WWW_CLONE="$TMP_ROOT/www-v0180"
ORG_CLONE="$TMP_ROOT/org-profile-v0078"

clone_exact_tag \
  'control-v0269' \
  'ANTIMATTERIUM/CONTROL' \
  'v0.2.69-antimatterium-control-move141-surface-closure' \
  'e78622f490ae36a2b2c4bb672191d5c4d2b90659' \
  "$CONTROL_CLONE"

(
  cd "$CONTROL_CLONE"
  npm run verify:move142-surface-backlink-fanout-closure
  npm run test:move142-surface-backlink-fanout-closure

  node --input-type=module <<'NODE'
  import fs from 'node:fs';

  const receipt = JSON.parse(
    fs.readFileSync(
      'control/ANTIMATTERIUM_CONTROL_MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE.json',
      'utf8'
    )
  );
  const verifier = fs.readFileSync(
    'scripts/verify-move142-surface-backlink-fanout-closure.mjs',
    'utf8'
  );
  const objectMove = Number(
    verifier.match(/["']move["']\s*:\s*(\d+)/)?.[1]
  );
  const checkMove = Number(
    verifier.match(
      /check\(\s*["']move["']\s*,\s*receipt\.move\s*,\s*(\d+)\s*\)/
    )?.[1]
  );

  if (receipt.move !== 124 || objectMove !== 124 || checkMove !== 124) {
    throw new Error('MOVE144_SOURCE_MOVE142_DRIFT_NOT_CONFIRMED');
  }

  console.log('MOVE144_SOURCE_MOVE142_SELF_CONSISTENT=true');
  console.log('MOVE144_SOURCE_MOVE142_ORDINAL_DRIFT_CONFIRMED=true');
NODE
)

run_if_script "$CONTROL_CLONE" verify:privacy
run_if_script "$CONTROL_CLONE" verify:claims

clone_exact_tag \
  'core-v0284' \
  'ANTIMATTERIUM/ANTIMATTERIUM' \
  'v0.2.84-antimatterium-control-v0269-backlink' \
  '1db9e83f7f8448a362e2f985f48f8be4d0657a95' \
  "$CORE_CLONE"

(
  cd "$CORE_CLONE"
  npm run verify:move143-control-v0269-backlink
  npm run test:move143-control-v0269-backlink
)

run_if_script "$CORE_CLONE" verify:privacy
run_if_script "$CORE_CLONE" verify:claims

clone_exact_tag \
  'www-v0180' \
  'ANTIMATTERIUM/WWW' \
  'v0.1.80-antimatterium-www-control-v0269-backlink' \
  'dbd2b99da519afde09e23e27b66e0a53a6165c40' \
  "$WWW_CLONE"

(
  cd "$WWW_CLONE"
  npm run verify:move143-control-v0269-backlink
  npm run test:move143-control-v0269-backlink
)

run_if_script "$WWW_CLONE" verify:privacy
run_if_script "$WWW_CLONE" verify:claims

clone_exact_tag \
  'org-profile-v0078' \
  'ANTIMATTERIUM/.github' \
  'v0.0.78-antimatterium-org-profile-control-v0269-backlink' \
  '6deb49a150c54ad90379673d80b046f3acb7d974' \
  "$ORG_CLONE"

(
  cd "$ORG_CLONE"
  npm run verify:move143-control-v0269-backlink
  npm run test:move143-control-v0269-backlink
)

run_if_script "$ORG_CLONE" verify:privacy
run_if_script "$ORG_CLONE" verify:claims

echo 'ANTIMATTERIUM_MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true'
echo 'ANTIMATTERIUM_MOVE143_SURFACE_BACKLINKS_REPLAYED=true'
echo 'ANTIMATTERIUM_MOVE144_ORDINAL_ONTOLOGY_CORRECTION_REPLAYED=true'
echo 'ANTIMATTERIUM_MOVE126_TO_MOVE142_LEGACY_EVIDENCE_PRESERVED=true'
echo 'ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true'
echo 'ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true'
echo 'NO_CURRENT_PRODUCTION_CLAIM=true'
echo 'NO_STARSHIP_CLAIM=true'
echo 'NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true'
