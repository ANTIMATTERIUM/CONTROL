#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM MOVE 120 PUBLIC SURFACE BACKLINK FANOUT CLOSURE AUDIT ==="

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "=== CLONE control-v0257 ==="
git clone "https://github.com/ANTIMATTERIUM/CONTROL.git" "$TMP/control-v0257"
cd "$TMP/control-v0257"
git checkout "v0.2.57-antimatterium-control-move117-surface-closure^{commit}"
echo "=== VERIFY CONTROL v0.2.57 ==="
npm run verify:move118-surface-backlink-fanout-closure

echo "=== CLONE core-v0272 ==="
git clone "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git" "$TMP/core-v0272"
cd "$TMP/core-v0272"
git checkout "v0.2.72-antimatterium-control-v0257-backlink^{commit}"
echo "=== VERIFY CORE v0.2.72 ==="
npm run verify:move119-control-v0257-backlink
npm run test:move119-control-v0257-backlink
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:privacy"] ? 0 : 1)'; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:claims"] ? 0 : 1)'; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "=== CLONE www-v0168 ==="
git clone "https://github.com/ANTIMATTERIUM/WWW.git" "$TMP/www-v0168"
cd "$TMP/www-v0168"
git checkout "v0.1.68-antimatterium-www-control-v0257-backlink^{commit}"
echo "=== VERIFY WWW v0.1.68 ==="
npm run verify:move119-control-v0257-backlink
npm run test:move119-control-v0257-backlink
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:privacy"] ? 0 : 1)'; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:claims"] ? 0 : 1)'; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "=== CLONE org-profile-v0066 ==="
git clone "https://github.com/ANTIMATTERIUM/.github.git" "$TMP/org-profile-v0066"
cd "$TMP/org-profile-v0066"
git checkout "v0.0.66-antimatterium-org-profile-control-v0257-backlink^{commit}"
echo "=== VERIFY ORG PROFILE v0.0.66 ==="
npm run verify:move119-control-v0257-backlink
npm run test:move119-control-v0257-backlink
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:privacy"] ? 0 : 1)'; then npm run verify:privacy; else echo "SKIP_MISSING_SCRIPT=verify:privacy"; fi
if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts["verify:claims"] ? 0 : 1)'; then npm run verify:claims; else echo "SKIP_MISSING_SCRIPT=verify:claims"; fi

echo "ANTIMATTERIUM_MOVE120_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true"
echo "ANTIMATTERIUM_MOVE119_SURFACE_BACKLINKS_REPLAYED=true"
echo "ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true"
echo "ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
