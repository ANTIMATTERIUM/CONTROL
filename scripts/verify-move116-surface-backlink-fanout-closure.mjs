#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 116);
assert.equal(receipt.closes_move, 115);

assert.equal(receipt.control_closure.package, "@antimatterium/control");
assert.equal(receipt.control_closure.version, "0.2.56");
assert.equal(receipt.control_closure.release_tag, "v0.2.56-antimatterium-control-move115-surface-closure");

assert.equal(receipt.source_control.version, "0.2.55");
assert.equal(receipt.source_control.release_tag, "v0.2.55-antimatterium-control-move113-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.55-antimatterium-control-move113-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29194891663");
assert.equal(receipt.source_control.main_sha, "f579904b1e8ce500661393d25b9016fa7b58bec1");
assert.equal(receipt.source_control.closure_id, "cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab");

assert.equal(receipt.surface_backlinks.core.version, "0.2.70");
assert.equal(receipt.surface_backlinks.core.release_tag, "v0.2.70-antimatterium-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.70-antimatterium-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.core.backlink_id, "42bad1271fae9a2d8af79e6a69fcdeecb88bd6f984c8672017ae001791502059");

assert.equal(receipt.surface_backlinks.www.version, "0.1.66");
assert.equal(receipt.surface_backlinks.www.release_tag, "v0.1.66-antimatterium-www-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.66-antimatterium-www-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.www.backlink_id, "a61e25e38d45861a8de0caadfa6767cfca68cf933068c315beb24034f65d7c1c");

assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.64");
assert.equal(receipt.surface_backlinks.org_profile.release_tag, "v0.0.64-antimatterium-org-profile-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.64-antimatterium-org-profile-control-v0255-backlink");
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "10252b4d19d3477e3ff415f43a942ec764c78d1da0775f643e55327d0b46ec52");

assert.equal(receipt.closure.move115_surface_fanout_closed, true);
assert.equal(receipt.closure.source_control_release_bound, true);
assert.equal(receipt.closure.source_control_ci_bound, true);
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
assert.equal(closure_id, "5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE115_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0255_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0270_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0166_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0064_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
