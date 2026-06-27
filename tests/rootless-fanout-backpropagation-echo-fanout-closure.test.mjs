import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 11 rootless fanout backpropagation echo fanout", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-backpropagation-echo-fanout-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSED=true/);
});
