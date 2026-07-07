import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 80 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move80-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17/);
});
