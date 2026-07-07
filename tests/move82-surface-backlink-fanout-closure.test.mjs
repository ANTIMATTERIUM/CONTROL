import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 82 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move82-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE82_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE82_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556/);
});
