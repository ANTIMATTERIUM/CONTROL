import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes bidirectional public chain", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-bidirectional-public-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_BIDIRECTIONAL_PUBLIC_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_BIDIRECTIONAL_PUBLIC_CHAIN_CLOSED=true/);
});
