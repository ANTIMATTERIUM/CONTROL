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

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE38_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 37 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.equal(pkg.version, '0.2.17');
  assert.equal(receipt.schema, 'antimatterium.control.move38.surface_backlink_fanout_closure.v1');
  assert.equal(receipt.move, 38);
  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.17');
  assert.equal(receipt.control_tag, 'v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.closure_slug, 'rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');

  assert.equal(receipt.prior_control.version, '0.2.16');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28518517865');
  assert.equal(receipt.prior_control.closure_id, 'e9f48278e811786b35f9939f982d502a7b0eacc4aff47e03e9257095190c6d26');

  assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.31-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink');
  assert.equal(receipt.surface_backlinks.core.backlink_id, 'b5a671ef8b595a9364f2aeb84bcc3a65d8204edacc4fc286c6c93c22929db325');
  assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.27-antimatterium-www-control-v0216-backlink');
  assert.equal(receipt.surface_backlinks.www.backlink_id, 'e0d7c0656edb7d82aef592ce161b22b83d96b271de5bce0627b09ab20ff0379c');
  assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.25-antimatterium-org-profile-control-v0216-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '6e5fcd8333be67c3a707210b384a9b78aac416f19d285879533f46e291248f27');

  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  const unsigned = JSON.parse(JSON.stringify(receipt));
  delete unsigned.closure_id;
  const expected = crypto.createHash('sha256').update(stable(unsigned)).digest('hex');
  assert.equal(receipt.closure_id, expected);

  console.log('ANTIMATTERIUM_CONTROL_MOVE38_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE37_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0216_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0231_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0127_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0025_BOUND=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE38_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
