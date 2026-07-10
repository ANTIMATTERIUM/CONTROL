import test from "node:test";
import assert from "node:assert";
import { execFileSync } from "node:child_process";

test("Move 96 CONTROL closure verifier exits cleanly", () => {
  const out = execFileSync("node", ["scripts/verify-move96-surface-backlink-fanout-closure.mjs"], {
    encoding: "utf8"
  });
  assert.match(out, /ANTIMATTERIUM_CONTROL_MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=/);
});
