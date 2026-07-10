#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 102);
assert.equal(receipt.closes_move, 101);

assert.equal(receipt.package.name, "@antimatterium/control");
assert.equal(receipt.package.version, "0.2.49");
assert.equal(receipt.package.release_tag, "v0.2.49-antimatterium-control-move101-surface-closure");
assert.equal(receipt.package.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.49-antimatterium-control-move101-surface-closure");

assert.equal(receipt.source_control.version, "0.2.48");
assert.equal(receipt.source_control.release_tag, "v0.2.48-antimatterium-control-move99-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.48-antimatterium-control-move99-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29122920642");
assert.equal(receipt.source_control.closure_id, "5b65cc86664000ddedcd539e13ad893e6c88e8912f5785a0163c408bb1624132");
assert.equal(receipt.source_control.main_sha, "ee9f30cd0b9378a8bf34d0e0ac285c282e310901");

assert.equal(receipt.surface_backlinks.length, 3);

const bySurface = Object.fromEntries(receipt.surface_backlinks.map((item) => [item.surface, item]));

assert.equal(bySurface.Core.version, "0.2.63");
assert.equal(bySurface.Core.release_tag, "v0.2.63-antimatterium-control-v0248-backlink");
assert.equal(bySurface.Core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.63-antimatterium-control-v0248-backlink");
assert.equal(bySurface.Core.backlink_id, "a555a952fe98d531710008e2ece633557a86786f7e1cca3b6128cec5bbf48151");

assert.equal(bySurface.WWW.version, "0.1.59");
assert.equal(bySurface.WWW.release_tag, "v0.1.59-antimatterium-www-control-v0248-backlink");
assert.equal(bySurface.WWW.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.59-antimatterium-www-control-v0248-backlink");
assert.equal(bySurface.WWW.backlink_id, "82ed229a283be8cf9d54e32dbf7f43a82cf3bdd8e0ba8d1b426c992231c83bae");

assert.equal(bySurface["Org profile"].version, "0.0.57");
assert.equal(bySurface["Org profile"].release_tag, "v0.0.57-antimatterium-org-profile-control-v0248-backlink");
assert.equal(bySurface["Org profile"].release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.57-antimatterium-org-profile-control-v0248-backlink");
assert.equal(bySurface["Org profile"].backlink_id, "29e68dcf4d7f831822f5313b6d5b3aebd803dd00b90563b06006363928db4187");

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");

assert.equal(closure.kind, "move102_control_public_surface_backlink_fanout_closure");
assert.equal(closure.closes_surface_fanout_move, 101);
assert.equal(closure.closes_control_release, receipt.source_control.release);
assert.equal(closure.id, computed);
assert.equal(closure.id, "fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE101_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0248_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0263_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0159_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0057_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
