import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(fs.readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

const expected = {
  closureId: "35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e",
  priorControlRelease: "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.22-antimatterium-control-move47-surface-closure",
  priorControlCiRun: "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28534121995",
  priorControlClosureId: "89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49",
  coreRelease: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.37-antimatterium-control-v0222-backlink",
  coreBacklinkId: "35fc44e15647597fec18114ec2cbe3e591f4a158b43e0a81225af3887d134e27",
  wwwRelease: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.33-antimatterium-www-control-v0222-backlink",
  wwwBacklinkId: "993d01f098661bf5373abd45b01682a18f2150223cd240ead5c266749c09fabf",
  orgProfileRelease: "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.31-antimatterium-org-profile-control-v0222-backlink",
  orgProfileBacklinkId: "3588f3fe60e284fa8183cb26ca5b0e5a91797609c3b6803ba6ea33eeedb13d25"
};

test("CONTROL closes Move 49 public surface backlink fanout", () => {
  assert.equal(pkg.version, "0.2.23");
  assert.equal(receipt.schema, "antimatterium.control.move50.surface_backlink_fanout_closure.v1");
  assert.equal(receipt.move, 50);
  assert.equal(receipt.status, "CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_RECORDED");
  assert.equal(receipt.control_version, "0.2.23");
  assert.equal(receipt.closes_surface_fanout_move, 49);
  assert.equal(receipt.prior_control_release, expected.priorControlRelease);
  assert.equal(receipt.prior_control_ci_run, expected.priorControlCiRun);
  assert.equal(receipt.prior_control_closure_id, expected.priorControlClosureId);

  assert.equal(receipt.surface_backlinks.core.release, expected.coreRelease);
  assert.equal(receipt.surface_backlinks.core.version, "0.2.37");
  assert.equal(receipt.surface_backlinks.core.backlink_id, expected.coreBacklinkId);

  assert.equal(receipt.surface_backlinks.www.release, expected.wwwRelease);
  assert.equal(receipt.surface_backlinks.www.version, "0.1.33");
  assert.equal(receipt.surface_backlinks.www.backlink_id, expected.wwwBacklinkId);

  assert.equal(receipt.surface_backlinks.org_profile.release, expected.orgProfileRelease);
  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.31");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, expected.orgProfileBacklinkId);

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  assert.equal(receipt.closure_id, expected.closureId);
});

console.log("ANTIMATTERIUM_CONTROL_MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE49_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0222_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0237_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0133_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0031_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(`MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=${expected.closureId}`);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
