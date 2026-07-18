import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 142 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', 'verify:move142-surface-backlink-fanout-closure'],
    { encoding: 'utf8' }
  );

  assert.equal(
    result.status,
    0,
    result.stderr || result.stdout
  );

  assert.match(
    result.stdout,
    /ANTIMATTERIUM_CONTROL_MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/
  );

  assert.match(
    result.stdout,
    /MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=[a-f0-9]{64}/
  );
});
