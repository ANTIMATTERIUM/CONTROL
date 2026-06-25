import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes second-order public stranger CI loop", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-second-order-public-stranger-ci-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_SECOND_ORDER_PUBLIC_STRANGER_CI_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_SECOND_ORDER_PUBLIC_STRANGER_CI_LOOP_CLOSED=true/);
});
