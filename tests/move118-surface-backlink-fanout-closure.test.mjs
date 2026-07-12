import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const verifierPath = path.resolve(__dirname, "../scripts/verify-move118-surface-backlink-fanout-closure.mjs");

const result = spawnSync(process.execPath, [verifierPath], { encoding: "utf8" });

assert.equal(result.status, 0, result.stderr || result.stdout);
assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
assert.match(result.stdout, /ANTIMATTERIUM_MOVE117_SURFACE_BACKLINKS_BOUND=true/);
assert.match(result.stdout, /MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=/);
