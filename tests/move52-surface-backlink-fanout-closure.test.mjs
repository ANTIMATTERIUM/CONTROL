import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 52 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 52);
  assert.equal(receipt.control_version, "0.2.24");
  assert.equal(receipt.prior_control.version, "0.2.23");
  assert.equal(receipt.surfaces.core.version, "0.2.38");
  assert.equal(receipt.surfaces.www.version, "0.1.34");
  assert.equal(receipt.surfaces.org_profile.version, "0.0.32");
  assert.equal(receipt.closure_id, "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");
});
