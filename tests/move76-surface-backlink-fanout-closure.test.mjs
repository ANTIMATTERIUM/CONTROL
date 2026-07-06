import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 76 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move76-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d/);
});
