import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 9 rootless fanout backpropagation echo", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-backpropagation-echo-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSED=true/);
});
