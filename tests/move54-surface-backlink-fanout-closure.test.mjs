import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Move 54 CONTROL closure verifier exits cleanly", () => {
  const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 54);
  assert.equal(receipt.control_version, "0.2.25");
  assert.equal(receipt.prior_control.version, "0.2.24");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "2510ae9ac118d45670c24263996408bb68f8a319cc46ec868a72cef24a78c7d7");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "aa66fcbfc52271292c9f0c42759bc545add393d47ffbfa9147f8f0c4ab911774");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "e587609ef1185666dd0074a06f877582ab7df86cd2a4daa3444184b4e647ed91");
  assert.equal(receipt.closure_id, "99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08");
});
