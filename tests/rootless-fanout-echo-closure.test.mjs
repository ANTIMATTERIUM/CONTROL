import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes rootless fanout echo", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-echo-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_ECHO_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_GRAPH_CLOSED=true/);
});
