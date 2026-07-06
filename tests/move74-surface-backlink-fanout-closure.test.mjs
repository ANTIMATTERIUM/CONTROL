import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 74 CONTROL closure verifier exits cleanly', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move74-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CONTROL_MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(result.stdout, /MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f/);
});
