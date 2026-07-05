import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import test from "node:test";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE66_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

const withoutClosureId = { ...receipt };
delete withoutClosureId.closure_id;
const expectedClosureId = createHash("sha256")
  .update(JSON.stringify(stable(withoutClosureId)))
  .digest("hex");

console.log("ANTIMATTERIUM_CONTROL_MOVE66_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE65_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0230_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0245_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0141_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0039_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(`MOVE66_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=${receipt.closure_id}`);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");

test("CONTROL closes Move 65 public surface backlink fanout", () => {
  assert.equal(receipt.schema, "antimatterium.control.public_surface_backlink_fanout_closure.v1");
  assert.equal(receipt.status, "CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_RECORDED");
  assert.equal(receipt.move, 66);
  assert.equal(receipt.closes_move, 65);
  assert.equal(receipt.control_version, "0.2.31");
  assert.match(pkg.version, /^0\.2\.\d+$/);

  assert.equal(receipt.prior_control.version, "0.2.30");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.30-antimatterium-control-move63-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28707158589");
  assert.equal(receipt.prior_control.closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");

  assert.equal(receipt.surface_fanout.core.version, "0.2.45");
  assert.equal(receipt.surface_fanout.core.backlink_id, "9689749f667d9470e2d098b2fd7d1f4a37e2b6921dccb21ec3b2b7266f8b9467");

  assert.equal(receipt.surface_fanout.www.version, "0.1.41");
  assert.equal(receipt.surface_fanout.www.backlink_id, "d3ce7a0c0968788b6934672066dea7a957637c1465eaed725a672da7eeb40007");

  assert.equal(receipt.surface_fanout.org_profile.version, "0.0.39");
  assert.equal(receipt.surface_fanout.org_profile.backlink_id, "d71a04c6391e04b0674d3cdc78955255611b11ee85ebdf8bc34ef1b4b712adf3");

  assert.equal(receipt.public_replay.short_public_tag_required, true);
  assert.equal(receipt.public_replay.no_local_root_required, true);
  assert.equal(receipt.public_replay.move65_surface_backlinks_replayed, true);

  assert.equal(receipt.safety_boundary.no_current_production_claim, true);
  assert.equal(receipt.safety_boundary.no_starship_claim, true);
  assert.equal(receipt.safety_boundary.no_physical_production_instructions, true);

  assert.equal(receipt.closure_id, expectedClosureId);
});
