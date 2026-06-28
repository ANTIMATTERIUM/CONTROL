import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 15 rootless fanout backpropagation echo fanout backlink closure backpropagation", () => {
  const out = execFileSync(
    process.execPath,
    ["scripts/verify-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure.mjs"],
    { encoding: "utf8" }
  );

  assert.match(
    out,
    /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_VERIFY_PASS=true/
  );
});
