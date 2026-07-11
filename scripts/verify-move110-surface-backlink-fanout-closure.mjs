#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 110);

assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.version, "0.2.53");
assert.equal(receipt.control.release_tag, "v0.2.53-antimatterium-control-move109-surface-closure");
assert.equal(receipt.control.closes_move, 109);

assert.equal(receipt.source_control.version, "0.2.52");
assert.equal(receipt.source_control.release_tag, "v0.2.52-antimatterium-control-move107-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.52-antimatterium-control-move107-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29154133238");
assert.equal(receipt.source_control.main_sha, "7068597bd0de25531fffc73c916ca680280c4889");
assert.equal(receipt.source_control.closure_id, "48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181");

assert.equal(receipt.move109_surface_backlinks.core.version, "0.2.67");
assert.equal(receipt.move109_surface_backlinks.core.release_tag, "v0.2.67-antimatterium-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.67-antimatterium-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.core.backlink_id, "8a92f03a24e41405e8635033b1a9bd4e70fc69e7e3839ab3255fe35d616e8f34");

assert.equal(receipt.move109_surface_backlinks.www.version, "0.1.63");
assert.equal(receipt.move109_surface_backlinks.www.release_tag, "v0.1.63-antimatterium-www-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.63-antimatterium-www-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.www.backlink_id, "fd6747f44d1fa00e122e042355e4a7b1c8f855bb183e581cbdc2b524899b4663");

assert.equal(receipt.move109_surface_backlinks.org_profile.version, "0.0.61");
assert.equal(receipt.move109_surface_backlinks.org_profile.release_tag, "v0.0.61-antimatterium-org-profile-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.61-antimatterium-org-profile-control-v0252-backlink");
assert.equal(receipt.move109_surface_backlinks.org_profile.backlink_id, "7e13161fecd4f3f64332e96aa1efd73704d5b4fdfb85b5f2083837b65da180ad");

assert.equal(receipt.closure.move109_surface_backlinks_bound, true);
assert.equal(receipt.closure.control_v0252_bound, true);
assert.equal(receipt.closure.core_v0267_bound, true);
assert.equal(receipt.closure.www_v0163_bound, true);
assert.equal(receipt.closure.org_profile_v0061_bound, true);
assert.equal(receipt.closure.replayable_without_local_root, true);
assert.equal(receipt.closure.public_release_bound, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure_id, computed);
assert.equal(closure_id, "2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE109_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0252_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0267_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0163_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0061_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
