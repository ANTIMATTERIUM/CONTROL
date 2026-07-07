import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Move 88 CONTROL closure verifier exits cleanly', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-move88-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_CONTROL_MOVE88_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_MOVE87_SURFACE_BACKLINKS_BOUND=true/);
});
