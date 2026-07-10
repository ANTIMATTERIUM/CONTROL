import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Move 98 CONTROL closure verifier exits cleanly", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move98-surface-backlink-fanout-closure.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=d0d96d476693d7cc05e1a2c6f4467afaeae1711d5dd426944f78cd0e60789874/);
});
