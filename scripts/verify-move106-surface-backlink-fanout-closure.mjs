#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE106_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE106_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 106);
assert.equal(receipt.package.name, "@antimatterium/control");
assert.equal(receipt.package.version, "0.2.51");
assert.equal(receipt.package.release_tag, "v0.2.51-antimatterium-control-move105-surface-closure");

assert.equal(receipt.closes.move, 105);
assert.equal(receipt.closes.kind, "public_surface_backlink_fanout");
assert.equal(receipt.closes.source_control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.closes.source_control_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29151398850");
assert.equal(receipt.closes.source_control_main_sha, "c34479b974a5f064e730f1f02538d52992a3b606");
assert.equal(receipt.closes.source_control_closure_id, "65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186");

assert.equal(receipt.bound_control.version, "0.2.50");
assert.equal(receipt.bound_control.release_tag, "v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.bound_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.bound_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29151398850");
assert.equal(receipt.bound_control.closure_id, "65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186");

assert.equal(receipt.public_surfaces.core.version, "0.2.65");
assert.equal(receipt.public_surfaces.core.release_tag, "v0.2.65-antimatterium-control-v0250-backlink");
assert.equal(receipt.public_surfaces.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.65-antimatterium-control-v0250-backlink");
assert.equal(receipt.public_surfaces.core.backlink_id, "4cbbdf5854fa9683e56d2f4aadb50f18bbeb4aa5f7ae021b9fe197b2bee5e812");

assert.equal(receipt.public_surfaces.www.version, "0.1.61");
assert.equal(receipt.public_surfaces.www.release_tag, "v0.1.61-antimatterium-www-control-v0250-backlink");
assert.equal(receipt.public_surfaces.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.61-antimatterium-www-control-v0250-backlink");
assert.equal(receipt.public_surfaces.www.backlink_id, "3f9410579f838edf1cf208064e2bfb4974708ba04a78be16d600450c37f7a284");

assert.equal(receipt.public_surfaces.org_profile.version, "0.0.59");
assert.equal(receipt.public_surfaces.org_profile.release_tag, "v0.0.59-antimatterium-org-profile-control-v0250-backlink");
assert.equal(receipt.public_surfaces.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.59-antimatterium-org-profile-control-v0250-backlink");
assert.equal(receipt.public_surfaces.org_profile.backlink_id, "dffc4da67ad1c81c45dbf42d3c5828def70160784fd4febb203762f744d23220");

assert.equal(receipt.membership.move105_surface_backlinks_bound, true);
assert.equal(receipt.membership.control_v0250_bound, true);
assert.equal(receipt.membership.core_v0265_bound, true);
assert.equal(receipt.membership.www_v0161_bound, true);
assert.equal(receipt.membership.org_profile_v0059_bound, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure.id, computed);
assert.equal(closure.id, "88760f9d9c0dc29d456878503895c5c47bbc5c0a42d33d5050b6fbb95bd1bd2b");
assert.equal(closure.replayable_without_local_root, true);
assert.equal(closure.public_release_bound, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE106_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE105_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0250_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0265_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0161_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0059_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE106_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
