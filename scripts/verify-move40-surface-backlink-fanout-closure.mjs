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

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE40_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 39 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.equal(pkg.version, '0.2.18');
  assert.equal(receipt.schema, 'antimatterium.control.move40.surface_backlink_fanout_closure.v1');
  assert.equal(receipt.move, 40);
  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.18');
  assert.equal(receipt.control_tag, 'v0.2.18-antimatterium-control-move39-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure');
  assert.equal(receipt.short_public_tag_required, true);

  assert.equal(receipt.prior_control.version, '0.2.17');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28520105839');
  assert.equal(receipt.prior_control.closure_id, '7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e');
  assert.equal(receipt.prior_control.verify_alias, 'verify:move38-surface-backlink-fanout-closure');

  assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.32-antimatterium-control-v0217-backlink');
  assert.equal(receipt.surface_backlinks.core.backlink_id, '7b82854012506928ee4b9d74b83f8f64682e23125dae344dda85b6f3aab60736');
  assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.28-antimatterium-www-control-v0217-backlink');
  assert.equal(receipt.surface_backlinks.www.backlink_id, '55b72bf947c3b8a09eb131f5fa9f6f133c470b93b4409dc1b3775ff3ecaf3cca');
  assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.26-antimatterium-org-profile-control-v0217-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, 'e83d51a84b4098da43fa5e7101e3795e610b59bec7ce9fd53f7d642118bda7e1');

  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  const unsigned = JSON.parse(JSON.stringify(receipt));
  delete unsigned.closure_id;
  const expected = crypto.createHash('sha256').update(stable(unsigned)).digest('hex');
  assert.equal(receipt.closure_id, expected);

  console.log('ANTIMATTERIUM_CONTROL_MOVE40_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE39_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0217_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0232_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0128_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0026_BOUND=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE40_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
