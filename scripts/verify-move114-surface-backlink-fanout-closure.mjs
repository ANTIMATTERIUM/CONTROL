#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE114_SURFACE_BACKLINK_FANOUT_CLOSURE.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE114_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 114);

assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.version, "0.2.55");
assert.equal(receipt.control.release_tag, "v0.2.55-antimatterium-control-move113-surface-closure");
assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.55-antimatterium-control-move113-surface-closure");

assert.equal(receipt.source_control_closure.version, "0.2.54");
assert.equal(receipt.source_control_closure.release_tag, "v0.2.54-antimatterium-control-move111-surface-closure");
assert.equal(receipt.source_control_closure.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.54-antimatterium-control-move111-surface-closure");
assert.equal(receipt.source_control_closure.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29191821036");
assert.equal(receipt.source_control_closure.main_sha, "cba5f798ac6a803803e86ca39ad54376c338d381");
assert.equal(receipt.source_control_closure.closure_id, "ebfc24685134a4fb66c15bf9ec149a0d1a4ec8c98871f9684c0cb73447e751a6");

assert.equal(receipt.closed_surface_fanout.move, 113);
assert.equal(receipt.closed_surface_fanout.source_control_version, "0.2.54");

assert.equal(receipt.closed_surface_fanout.surfaces.core.version, "0.2.69");
assert.equal(receipt.closed_surface_fanout.surfaces.core.release_tag, "v0.2.69-antimatterium-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.69-antimatterium-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.core.backlink_id, "6778a5fd828e9470ad30a5a06106dd328089eb00061a10b28c996fd712451ca4");

assert.equal(receipt.closed_surface_fanout.surfaces.www.version, "0.1.65");
assert.equal(receipt.closed_surface_fanout.surfaces.www.release_tag, "v0.1.65-antimatterium-www-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.65-antimatterium-www-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.www.backlink_id, "820dd8dc5685b4624f390bd80e085a27bf8d656033ee8a0fcd0c553bbeecc5cf");

assert.equal(receipt.closed_surface_fanout.surfaces.org_profile.version, "0.0.63");
assert.equal(receipt.closed_surface_fanout.surfaces.org_profile.release_tag, "v0.0.63-antimatterium-org-profile-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.63-antimatterium-org-profile-control-v0254-backlink");
assert.equal(receipt.closed_surface_fanout.surfaces.org_profile.backlink_id, "42a0e1c8e43944b904e21f71365e55365f270b62832999c8cb0e99242d71d6fa");

assert.equal(receipt.closure.move113_surface_backlinks_bound, true);
assert.equal(receipt.closure.core_v0269_bound, true);
assert.equal(receipt.closure.www_v0165_bound, true);
assert.equal(receipt.closure.org_profile_v0063_bound, true);
assert.equal(receipt.closure.replayable_without_local_root, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure_id, computed);
assert.equal(closure_id, "cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE114_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE113_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0254_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0269_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0165_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0063_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE114_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
