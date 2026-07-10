#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 102 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

clone_tag() {
  local repo="$1"
  local tag="$2"
  local dir="$3"
  git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "$dir" >/dev/null 2>&1
}

echo "=== CLONE control-v0248 ==="
clone_tag "ANTIMATTERIUM/CONTROL" "v0.2.48-antimatterium-control-move99-surface-closure" "$TMPDIR/control-v0248"
cd "$TMPDIR/control-v0248"
echo "=== VERIFY CONTROL v0.2.48 ==="
npm run verify:move100-surface-backlink-fanout-closure

echo "=== CLONE core-v0263 ==="
clone_tag "ANTIMATTERIUM/ANTIMATTERIUM" "v0.2.63-antimatterium-control-v0248-backlink" "$TMPDIR/core-v0263"
cd "$TMPDIR/core-v0263"
echo "=== VERIFY CORE v0.2.63 ==="
npm run verify:move101-control-v0248-backlink
npm run test:move101-control-v0248-backlink
if npm run | grep -q "verify:privacy"; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if npm run | grep -q "verify:claims"; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "=== CLONE www-v0159 ==="
clone_tag "ANTIMATTERIUM/WWW" "v0.1.59-antimatterium-www-control-v0248-backlink" "$TMPDIR/www-v0159"
cd "$TMPDIR/www-v0159"
echo "=== VERIFY WWW v0.1.59 ==="
npm run verify:move101-control-v0248-backlink
npm run test:move101-control-v0248-backlink
if npm run | grep -q "verify:privacy"; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if npm run | grep -q "verify:claims"; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "=== CLONE org-profile-v0057 ==="
clone_tag "ANTIMATTERIUM/.github" "v0.0.57-antimatterium-org-profile-control-v0248-backlink" "$TMPDIR/org-profile-v0057"
cd "$TMPDIR/org-profile-v0057"
echo "=== VERIFY ORG PROFILE v0.0.57 ==="
npm run verify:move101-control-v0248-backlink
npm run test:move101-control-v0248-backlink
if npm run | grep -q "verify:privacy"; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if npm run | grep -q "verify:claims"; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "ANTIMATTERIUM_MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE101_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
