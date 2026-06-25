import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL closes public ecosystem index echo", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-ecosystem-index-echo-closure.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_ECHO_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_PUBLIC_ECOSYSTEM_ECHO_GRAPH_CLOSED=true/);
});
