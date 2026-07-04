import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 56 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 56);
  assert.equal(receipt.control_version, "0.2.26");
  assert.equal(receipt.prior_control.version, "0.2.25");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "25300eab3d4e02042e2a78ddea6390e7eb6224ee05677d0de1ebe61f1fb66cd3");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "3b97914ce9676d649d2157221c44a69b222a83d8a6071267f1fad5f29c499880");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "b11e8e8c9c1232e769c7f4ed358871c845732f7e3893af80b967864cf235ffe8");
  assert.equal(receipt.closure_id, "8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf");
});
