import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("CONTROL closes public surface backlink fanout from CONTROL v0.2.10", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure.mjs"], {
    encoding: "utf8"
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /VERIFY_PASS=true/);
  assert.match(result.stdout, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
