import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 17 rootless fanout backlink closure backpropagation closure backlinks", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_ID=/);
});
