import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 84 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move84-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE84_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE84_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a/);
});
