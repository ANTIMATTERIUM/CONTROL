import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL binds stranger final audit bundle", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-stranger-final-audit.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_STRANGER_FINAL_AUDIT_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_CONTROL_STRANGER_REPLAYABLE=true/);
});
