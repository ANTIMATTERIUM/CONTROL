import { execFileSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

test("Move 50 CONTROL closure verifier exits cleanly", () => {
  const output = execFileSync("node", ["scripts/verify-move50-surface-backlink-fanout-closure.mjs"], {
    encoding: "utf8"
  });
  assert.match(output, /ANTIMATTERIUM_CONTROL_MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(output, /MOVE50_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=/);
});
