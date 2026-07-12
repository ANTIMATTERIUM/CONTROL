import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 122 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', 'verify:move122-surface-backlink-fanout-closure'],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    /ANTIMATTERIUM_CONTROL_MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/
  );

  assert.match(
    result.stdout,
    /MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=/
  );
});
