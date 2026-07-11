#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE108_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_MOVE108_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 108);
assert.equal(receipt.closes_move, 107);

assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.version, "0.2.52");
assert.equal(receipt.control.release_tag, "v0.2.52-antimatterium-control-move107-surface-closure");

assert.equal(receipt.source_control.version, "0.2.51");
assert.equal(receipt.source_control.release_tag, "v0.2.51-antimatterium-control-move105-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.51-antimatterium-control-move105-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29152869204");
assert.equal(receipt.source_control.main_sha, "05be850cd6ee4e1f71dc643859b3ec1e531e05af");
assert.equal(receipt.source_control.closure_id, "88760f9d9c0dc29d456878503895c5c47bbc5c0a42d33d5050b6fbb95bd1bd2b");

assert.equal(receipt.public_surfaces.core.version, "0.2.66");
assert.equal(receipt.public_surfaces.core.release_tag, "v0.2.66-antimatterium-control-v0251-backlink");
assert.equal(receipt.public_surfaces.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.66-antimatterium-control-v0251-backlink");
assert.equal(receipt.public_surfaces.core.backlink_id, "b8252cce6745ed95358efc596a327c186f13f1e48df43df5bde237a089a1d2ea");

assert.equal(receipt.public_surfaces.www.version, "0.1.62");
assert.equal(receipt.public_surfaces.www.release_tag, "v0.1.62-antimatterium-www-control-v0251-backlink");
assert.equal(receipt.public_surfaces.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.62-antimatterium-www-control-v0251-backlink");
assert.equal(receipt.public_surfaces.www.backlink_id, "dd8ebcf9b032f93ecc232725effc99610bd7da38205d9b9a053720525461be27");

assert.equal(receipt.public_surfaces.org_profile.version, "0.0.60");
assert.equal(receipt.public_surfaces.org_profile.release_tag, "v0.0.60-antimatterium-org-profile-control-v0251-backlink");
assert.equal(receipt.public_surfaces.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.60-antimatterium-org-profile-control-v0251-backlink");
assert.equal(receipt.public_surfaces.org_profile.backlink_id, "67c60e824889be73002b529048bb530363c0923004b4d3debf6db0518e9880ba");

assert.equal(receipt.membership.move107_surface_backlinks_bound, true);
assert.equal(receipt.membership.control_v0251_bound, true);
assert.equal(receipt.membership.core_v0266_bound, true);
assert.equal(receipt.membership.www_v0162_bound, true);
assert.equal(receipt.membership.org_profile_v0060_bound, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { closure, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure.id, computed);
assert.equal(closure.id, "48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181");
assert.equal(closure.replayable_without_local_root, true);
assert.equal(closure.public_release_bound, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE108_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE107_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0251_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0266_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0162_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0060_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE108_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
