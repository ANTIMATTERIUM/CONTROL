import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Move 102 CONTROL closure verifier exits cleanly", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move102-surface-backlink-fanout-closure.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE102_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073/);
});
