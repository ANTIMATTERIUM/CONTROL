import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Move 92 CONTROL closure verifier exits cleanly', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-move92-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_CONTROL_MOVE92_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_MOVE91_SURFACE_BACKLINKS_BOUND=true/);
});
