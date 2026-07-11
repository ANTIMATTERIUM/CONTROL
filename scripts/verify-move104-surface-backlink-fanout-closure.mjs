#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 104);
assert.equal(receipt.closes_move, 103);

assert.equal(receipt.package.name, "@antimatterium/control");
assert.equal(receipt.package.version, "0.2.50");
assert.equal(receipt.package.release_tag, "v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.package.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.50-antimatterium-control-move103-surface-closure");

assert.equal(receipt.source_control.version, "0.2.49");
assert.equal(receipt.source_control.release_tag, "v0.2.49-antimatterium-control-move101-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.49-antimatterium-control-move101-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29123896960");
assert.equal(receipt.source_control.main_sha, "c475e2c8478fb384c6b350f1a62d063c57ee2b06");
assert.equal(receipt.source_control.closure_id, "fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073");

assert.equal(receipt.closed_public_surfaces.length, 3);

const core = receipt.closed_public_surfaces.find((entry) => entry.label === "Core");
assert.ok(core);
assert.equal(core.repository, "ANTIMATTERIUM/ANTIMATTERIUM");
assert.equal(core.version, "0.2.64");
assert.equal(core.release_tag, "v0.2.64-antimatterium-control-v0249-backlink");
assert.equal(core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.64-antimatterium-control-v0249-backlink");
assert.equal(core.backlink_id, "6b30c1df950a1875c0af0f930a0121eeebdf83ceb2066cf54d0dbe1366469716");

const www = receipt.closed_public_surfaces.find((entry) => entry.label === "WWW");
assert.ok(www);
assert.equal(www.repository, "ANTIMATTERIUM/WWW");
assert.equal(www.version, "0.1.60");
assert.equal(www.release_tag, "v0.1.60-antimatterium-www-control-v0249-backlink");
assert.equal(www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.60-antimatterium-www-control-v0249-backlink");
assert.equal(www.backlink_id, "be72c5faba9810a7a9d5e6b80551097bf545d6329bfec4da109b5dc0e1b04dd8");

const orgProfile = receipt.closed_public_surfaces.find((entry) => entry.label === "Org profile");
assert.ok(orgProfile);
assert.equal(orgProfile.repository, "ANTIMATTERIUM/.github");
assert.equal(orgProfile.version, "0.0.58");
assert.equal(orgProfile.release_tag, "v0.0.58-antimatterium-org-profile-control-v0249-backlink");
assert.equal(orgProfile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.58-antimatterium-org-profile-control-v0249-backlink");
assert.equal(orgProfile.backlink_id, "9138f0c926065906b07dec873f74ee00bd5c787e5cfbd0ffaaec104814bf565f");

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure.id, computed);
assert.equal(closure.id, "65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186");
assert.equal(closure.kind, "move104_public_surface_backlink_fanout_closure");
assert.equal(closure.closes_public_surface_backlink_fanout, true);
assert.equal(closure.closes_source_control_release, receipt.source_control.release);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE103_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0249_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0264_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0160_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0058_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
