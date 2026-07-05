import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-move68-surface-backlink-fanout-closure.mjs');

test('Move 68 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f/);
});
