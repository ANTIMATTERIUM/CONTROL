import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';

function stable(value) {
  if (Array.isArray(value)) return '[' + value.map(stable).join(',') + ']';
  if (value && typeof value === 'object') {
    return '{' + Object.keys(value).sort().map((key) => JSON.stringify(key) + ':' + stable(value[key])).join(',') + '}';
  }
  return JSON.stringify(value);
}

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE44_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 43 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.equal(pkg.version, '0.2.20');
  assert.equal(receipt.schema, 'antimatterium.control.move44.surface_backlink_fanout_closure.v1');
  assert.equal(receipt.move, 44);
  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.20');
  assert.equal(receipt.control_tag, 'v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.short_public_tag_required, true);

  assert.equal(receipt.prior_control.version, '0.2.19');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525061736');
  assert.equal(receipt.prior_control.closure_id, '9ae0cf352d7062356e02b964d517a9321f0c0743d2eba695fb0d6adc6a702f08');
  assert.equal(receipt.prior_control.verify_alias, 'verify:move42-surface-backlink-fanout-closure');

  assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.34-antimatterium-control-v0219-backlink');
  assert.equal(receipt.surface_backlinks.core.backlink_id, '030604066e720daecb36c2e43a7cfe70e7f763b69f2766241f8277b058342d6a');
  assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.30-antimatterium-www-control-v0219-backlink');
  assert.equal(receipt.surface_backlinks.www.backlink_id, 'a1daaf00ecc840a8f30513505205e2414dc170f1141bc6adcb501bd6b6121b75');
  assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.28-antimatterium-org-profile-control-v0219-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '87276a767baa71208d5f2ad2623f306d007f90c4f83fa50725d31f321b32b2c8');

  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  const unsigned = JSON.parse(JSON.stringify(receipt));
  delete unsigned.closure_id;
  const expected = crypto.createHash('sha256').update(stable(unsigned)).digest('hex');
  assert.equal(receipt.closure_id, expected);

  console.log('ANTIMATTERIUM_CONTROL_MOVE44_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE43_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0219_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0234_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0130_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0028_BOUND=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE44_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
