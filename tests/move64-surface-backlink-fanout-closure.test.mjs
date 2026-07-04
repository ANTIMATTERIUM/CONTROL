import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

test("Move 64 CONTROL closure verifier exits cleanly", () => {
  const verifier = fileURLToPath(
    new URL("../scripts/verify-move64-surface-backlink-fanout-closure.mjs", import.meta.url),
  );

  const result = spawnSync(process.execPath, [verifier], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
});
