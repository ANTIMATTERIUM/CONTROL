import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Move 116 CONTROL closure verifier exits cleanly", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move116-surface-backlink-fanout-closure.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE116_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc/);
});
