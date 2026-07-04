import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 58 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 58);
  assert.equal(receipt.control_version, "0.2.27");
  assert.equal(receipt.prior_control.version, "0.2.26");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "2e0deb97724408f5b010420abca50ad4992c06027ba38178d6921db32de995dd");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "61cdb8b8cba8cfdcd32dd0bca3db4083f8e2029fb6abf38aeb9d4d9de7e060ba");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "6579f853f01750b72f2471c53688a3f324d5c719a5b8d0045b501f3675619e67");
  assert.equal(receipt.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
});
