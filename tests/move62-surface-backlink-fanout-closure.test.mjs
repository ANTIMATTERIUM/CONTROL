import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 62 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 62);
  assert.equal(receipt.control_version, "0.2.29");
  assert.equal(receipt.prior_control.version, "0.2.28");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "7cf006f082445cc6ad6d76b0c3d091b156e89c40022423c76bf5863168ff3a44");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "2c351b5159bd5bcd1f5d3180ef51ec1ae06457978690061755729c748337bbe8");
  assert.equal(receipt.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
});
