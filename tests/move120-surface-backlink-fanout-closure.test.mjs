import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Move 120 CONTROL closure verifier exits cleanly', () => {
  const out = execFileSync('node', ["scripts/verify-move120-surface-backlink-fanout-closure.mjs"], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_CONTROL_MOVE120_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_MOVE119_SURFACE_BACKLINKS_BOUND=true/);
  assert.match(out, /ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
