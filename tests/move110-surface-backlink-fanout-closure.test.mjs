import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Move 110 CONTROL closure verifier exits cleanly", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move110-surface-backlink-fanout-closure.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE110_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7/);
});
