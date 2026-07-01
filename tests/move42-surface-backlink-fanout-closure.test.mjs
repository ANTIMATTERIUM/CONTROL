import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Move 42 CONTROL closure verifier exits cleanly', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-move42-surface-backlink-fanout-closure.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_CONTROL_MOVE42_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
