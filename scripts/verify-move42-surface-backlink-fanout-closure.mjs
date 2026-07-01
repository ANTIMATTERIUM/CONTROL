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

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE42_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 41 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, 'antimatterium.control.move42.surface_backlink_fanout_closure.v1');
  assert.equal(receipt.move, 42);
  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.19');
  assert.equal(receipt.control_tag, 'v0.2.19-antimatterium-control-move41-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure');
  assert.equal(receipt.short_public_tag_required, true);

  assert.equal(receipt.prior_control.version, '0.2.18');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28524366738');
  assert.equal(receipt.prior_control.closure_id, '01a39a53a3914b1b38f283f2b4232b190c201712f0f8edb6fd0e91fc7bca717a');
  assert.equal(receipt.prior_control.verify_alias, 'verify:move40-surface-backlink-fanout-closure');

  assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.33-antimatterium-control-v0218-backlink');
  assert.equal(receipt.surface_backlinks.core.backlink_id, '7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3');
  assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.29-antimatterium-www-control-v0218-backlink');
  assert.equal(receipt.surface_backlinks.www.backlink_id, 'd2b0bada95d147729a5fc041879c7a4cc7dfe35341b75d92e3d1d0b5244ced60');
  assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.27-antimatterium-org-profile-control-v0218-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '2ea777fdfe235d31159ec4601a1c26098d0a0ec2092319fd171ac332863ee008');

  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  const unsigned = JSON.parse(JSON.stringify(receipt));
  delete unsigned.closure_id;
  const expected = crypto.createHash('sha256').update(stable(unsigned)).digest('hex');
  assert.equal(receipt.closure_id, expected);

  console.log('ANTIMATTERIUM_CONTROL_MOVE42_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE41_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0218_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0233_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0129_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0027_BOUND=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE42_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
