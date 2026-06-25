import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("CONTROL public ecosystem closure index verifies", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-ecosystem-index.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_PUBLIC_ECOSYSTEM_GRAPH_CLOSED=true/);
});
