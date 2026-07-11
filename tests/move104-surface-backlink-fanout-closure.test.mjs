import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Move 104 CONTROL closure verifier exits cleanly", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move104-surface-backlink-fanout-closure.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE104_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186/);
});
