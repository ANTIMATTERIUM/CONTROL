import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL public stranger CI verifies", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-stranger-ci.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_CI_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_WORKFLOW_BOUND=true/);
});
