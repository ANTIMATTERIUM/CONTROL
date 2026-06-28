import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes Move 19 rootless fanout backlink closure backpropagation closure fanout backlinks", () => {
  const output = execFileSync("node", ["scripts/verify-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure.mjs"], {
    encoding: "utf8"
  });

  assert.match(output, /ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true/);
  assert.match(output, /ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSED=true/);
  assert.match(output, /ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true/);
});
