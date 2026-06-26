import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes rootless fanout backlink loop", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-backlink-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_CLOSED=true/);
});
