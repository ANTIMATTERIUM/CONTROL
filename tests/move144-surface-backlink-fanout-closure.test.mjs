import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 144 CONTROL correction and closure verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', 'verify:move144-surface-backlink-fanout-closure'],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(
    result.stdout,
    /ANTIMATTERIUM_CONTROL_MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/
  );
  assert.match(
    result.stdout,
    /ANTIMATTERIUM_MOVE144_ORDINAL_ONTOLOGY_CORRECTION_BOUND=true/
  );
  assert.match(
    result.stdout,
    /ANTIMATTERIUM_MOVE126_TO_MOVE142_LEGACY_EVIDENCE_PRESERVED=true/
  );
  assert.match(
    result.stdout,
    /MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=[a-f0-9]{64}/
  );
});
