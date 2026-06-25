import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL public rootless reconstruction index verifies", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-rootless-reconstruction-index.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_ROOTLESS_RECONSTRUCTION_INDEX_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true/);
});
