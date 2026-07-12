#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE112_SURFACE_BACKLINK_FANOUT_CLOSURE.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE112_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 112);

assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.version, "0.2.54");
assert.equal(receipt.control.release_tag, "v0.2.54-antimatterium-control-move111-surface-closure");
assert.equal(receipt.control.role, "public_surface_backlink_fanout_closure");

assert.equal(receipt.source_control.version, "0.2.53");
assert.equal(receipt.source_control.release_tag, "v0.2.53-antimatterium-control-move109-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.53-antimatterium-control-move109-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29155447375");
assert.equal(receipt.source_control.main_sha, "fcaa2d7c60d5debe679adf899ed769a044dcfbc5");
assert.equal(receipt.source_control.closure_id, "2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7");

assert.equal(receipt.closed_surface_fanout.move, 111);
assert.equal(receipt.closed_surface_fanout.control_v0253_bound, true);
assert.equal(receipt.closed_surface_fanout.surfaces.length, 3);

const byKey = Object.fromEntries(receipt.closed_surface_fanout.surfaces.map((surface) => [surface.key, surface]));

assert.equal(byKey.core.repository, "ANTIMATTERIUM/ANTIMATTERIUM");
assert.equal(byKey.core.package, "@antimatterium/antimatterium");
assert.equal(byKey.core.version, "0.2.68");
assert.equal(byKey.core.release_tag, "v0.2.68-antimatterium-control-v0253-backlink");
assert.equal(byKey.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.68-antimatterium-control-v0253-backlink");
assert.equal(byKey.core.backlink_id, "acfb83e951098c7bf6641c91565ab6485eeb56cabfa536cbd5b5f19364b1daf1");

assert.equal(byKey.www.repository, "ANTIMATTERIUM/WWW");
assert.equal(byKey.www.package, "@antimatterium/www");
assert.equal(byKey.www.version, "0.1.64");
assert.equal(byKey.www.release_tag, "v0.1.64-antimatterium-www-control-v0253-backlink");
assert.equal(byKey.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.64-antimatterium-www-control-v0253-backlink");
assert.equal(byKey.www.backlink_id, "cf66a45147f746681d692c5763cb5e8b39bb9c9b980a1e177e4f9dac193e7c70");

assert.equal(byKey.org_profile.repository, "ANTIMATTERIUM/.github");
assert.equal(byKey.org_profile.package, "@antimatterium/org-profile");
assert.equal(byKey.org_profile.version, "0.0.62");
assert.equal(byKey.org_profile.release_tag, "v0.0.62-antimatterium-org-profile-control-v0253-backlink");
assert.equal(byKey.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.62-antimatterium-org-profile-control-v0253-backlink");
assert.equal(byKey.org_profile.backlink_id, "22bed1a287b290fc0219a40e0ac9aea349b9752b6210daa54064b467123ae2e3");

assert.equal(receipt.closure.move111_public_surface_backlink_fanout_closed, true);
assert.equal(receipt.closure.control_v0253_closure_replayed, true);
assert.equal(receipt.closure.all_surface_releases_bound, true);
assert.equal(receipt.closure.all_surface_backlink_ids_bound, true);
assert.equal(receipt.closure.replayable_without_local_root, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure_id, computed);
assert.equal(closure_id, "ebfc24685134a4fb66c15bf9ec149a0d1a4ec8c98871f9684c0cb73447e751a6");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE112_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE111_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0253_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0268_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0164_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0062_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE112_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
