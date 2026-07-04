import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 60 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 60);
  assert.equal(receipt.control_version, "0.2.28");
  assert.equal(receipt.prior_control.version, "0.2.27");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "3474233f57f492980f136b5e5d9df0946499cc64e09a06aa59c2283f3d7f816d");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "a0fcf65320c2a2ef628f148d07fa4a44b3904557323df877f240c15988a18428");
  assert.equal(receipt.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
});
