import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL public release matrix verifies", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-release-matrix.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_CONTROL_FINAL_AUDIT_ENTRYPOINT_BOUND=true/);
});
