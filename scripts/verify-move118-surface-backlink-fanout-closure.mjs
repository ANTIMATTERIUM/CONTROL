#!/usr/bin/env node
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const receiptPath = path.resolve(__dirname, "../control/ANTIMATTERIUM_CONTROL_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE.json");
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

function sorted(value) {
  if (Array.isArray(value)) return value.map(sorted);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sorted(value[key])]));
  }
  return value;
}

function idFor(value) {
  return crypto.createHash("sha256").update(JSON.stringify(sorted(value))).digest("hex");
}

const { closureId, ...baseReceipt } = receipt;
assert.equal(closureId, idFor(baseReceipt));
assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 118);
assert.equal(receipt.closesMove, 117);
assert.equal(receipt.controlVersion, "0.2.57");

assert.equal(receipt.sourceControl.tag, "v0.2.56-antimatterium-control-move115-surface-closure");
assert.equal(receipt.sourceControl.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.56-antimatterium-control-move115-surface-closure");
assert.equal(receipt.sourceControl.verifyCiRun, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29196327916");
assert.equal(receipt.sourceControl.mainSha, "10f9ca7a645ce99ee98e5e5447bb9d36fd371023");
assert.equal(receipt.sourceControl.closureId, "5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc");

assert.equal(receipt.surfaces.core.version, "0.2.71");
assert.equal(receipt.surfaces.core.tag, "v0.2.71-antimatterium-control-v0256-backlink");
assert.equal(receipt.surfaces.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.71-antimatterium-control-v0256-backlink");
assert.equal(receipt.surfaces.core.backlinkId, "5b111f52b32c421c7c3d0179a7d417be4716c95c8b57952e6243d210c0837bfd");

assert.equal(receipt.surfaces.www.version, "0.1.67");
assert.equal(receipt.surfaces.www.tag, "v0.1.67-antimatterium-www-control-v0256-backlink");
assert.equal(receipt.surfaces.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.67-antimatterium-www-control-v0256-backlink");
assert.equal(receipt.surfaces.www.backlinkId, "8f5ce7eb77862788c5abcc5066a9f197c4c789307dc2ada485e74c5ef2057cf8");

assert.equal(receipt.surfaces.orgProfile.version, "0.0.65");
assert.equal(receipt.surfaces.orgProfile.tag, "v0.0.65-antimatterium-org-profile-control-v0256-backlink");
assert.equal(receipt.surfaces.orgProfile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.65-antimatterium-org-profile-control-v0256-backlink");
assert.equal(receipt.surfaces.orgProfile.backlinkId, "2e5322ce89a5883d434f6632ee9b6fdf1deb575a8d6fc75f6807769234a04a79");

assert.equal(receipt.assertions.move117SurfaceBacklinksBound, true);
assert.equal(receipt.assertions.sourceControlClosureBound, true);
assert.equal(receipt.assertions.sourceControlVerifyCiBound, true);
assert.equal(receipt.assertions.shortPublicTagRequired, true);
assert.equal(receipt.assertions.noLocalRootRequired, true);
assert.equal(receipt.assertions.noCurrentProductionClaim, true);
assert.equal(receipt.assertions.noStarshipClaim, true);
assert.equal(receipt.assertions.noPhysicalProductionInstructions, true);

console.log("ANTIMATTERIUM_CONTROL_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE117_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0256_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0271_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0167_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0065_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + receipt.closureId);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
