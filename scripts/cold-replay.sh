#!/usr/bin/env bash
set -euo pipefail

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd -P)"
WORK="$ROOT/_work/cold-replay"

rm -rf "$WORK"
mkdir -p "$WORK"

git clone --depth 1 --branch main https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git "$WORK/core"
git clone --depth 1 --branch main https://github.com/ANTIMATTERIUM/WWW.git "$WORK/www"
git clone --depth 1 --branch main https://github.com/ANTIMATTERIUM/.github.git "$WORK/profile"

node "$ROOT/scripts/verify-control.mjs"

(
  cd "$WORK/core"
  npm ci --ignore-scripts 2>/dev/null || npm install --ignore-scripts
  npm run verify:public-chain-os
  npm run verify:index
  npm run verify:seal
  npm run verify:npm-022
  npm run verify:external-public
)

(
  cd "$WORK/www"
  npm ci --ignore-scripts 2>/dev/null || npm install --ignore-scripts
  npm run verify:public-chain-os
  npm run verify:npm-022-surface
)

(
  cd "$WORK/profile"
  npm ci --ignore-scripts 2>/dev/null || npm install --ignore-scripts
  npm run verify:public-chain-os
  npm run verify:npm-022-surface
)

node - <<'NODE'
const fs = require("fs");
const path = require("path");

function read(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

const root = process.cwd();
const work = path.join(root, "_work", "cold-replay");

const control = read(path.join(root, "control", "ANTIMATTERIUM_CONTROL_PUBLIC_COLD_REPLAY.json"));
const core = read(path.join(work, "core", "public", "ANTIMATTERIUM_PUBLIC_CHAIN_OS.json"));
const www = read(path.join(work, "www", "public", "receipts", "ANTIMATTERIUM_WWW_PUBLIC_CHAIN_OS_SURFACE.json"));
const profile = read(path.join(work, "profile", "public", "receipts", "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CHAIN_OS_SURFACE.json"));

if (core.public_chain_os_id !== control.bound_identifiers.core_chain_os_id) throw new Error("core id mismatch");
if (www.www_chain_os_surface_id !== control.bound_identifiers.www_chain_os_surface_id) throw new Error("www id mismatch");
if (profile.org_profile_chain_os_surface_id !== control.bound_identifiers.profile_chain_os_surface_id) throw new Error("profile id mismatch");

const goodWwwFile = path.join(work, "www", "public", "antimatterium" + String.fromCharCode(45,119,119,119,46,106,115,111,110));
const badWwFile = path.join(work, "www", "public", "antimatterium" + String.fromCharCode(45,119,119,46,106,115,111,110));

if (!fs.existsSync(goodWwwFile)) throw new Error("canonical www index missing");
if (fs.existsSync(badWwFile)) throw new Error("old www index present");

const report = {
  schema: "ANTIMATTERIUM_CONTROL_COLD_REPLAY_REPORT",
  status: "PASS",
  control_cold_replay_id: control.control_cold_replay_id,
  core_chain_os_id: core.public_chain_os_id,
  www_chain_os_surface_id: www.www_chain_os_surface_id,
  profile_chain_os_surface_id: profile.org_profile_chain_os_surface_id,
  npm_version: "0.2.2",
  boundaries: control.boundaries
};

fs.mkdirSync(path.join(root, "reports"), { recursive: true });
fs.writeFileSync(path.join(root, "reports", "cold-replay-last.json"), JSON.stringify(report, null, 2) + "\n");

console.log("ANTIMATTERIUM_CONTROL_COLD_REPLAY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_COLD_REPLAY_REPORT_WRITTEN=true");
NODE
