import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 21 rootless fanout backlinks", () => {
  const output = execFileSync("node", [
    "scripts/verify-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure.mjs"
  ], { encoding: "utf8" });

  assert.match(output, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(output, /ANTIMATTERIUM_MOVE21|ANTIMATTERIUM_CONTROL_V028_BOUND=true/);
  assert.match(output, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
