import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 47 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.equal(pkg.version, '0.2.22');
  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.22');
  assert.equal(receipt.public_tag, 'v0.2.22-antimatterium-control-move47-surface-closure');

  assert.equal(receipt.prior_control.version, '0.2.21');
  assert.equal(receipt.prior_control.tag, 'v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28527938011');
  assert.equal(receipt.prior_control.closure_id, '84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');

  assert.equal(receipt.move47_surface_backlinks.core.version, '0.2.36');
  assert.equal(receipt.move47_surface_backlinks.core.tag, 'v0.2.36-antimatterium-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.36-antimatterium-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.core.backlink_id, 'ea25bf47fc44f217a5f6d5b610c4b6f28b01933988b9dd32ccd11f028df75db1');

  assert.equal(receipt.move47_surface_backlinks.www.version, '0.1.32');
  assert.equal(receipt.move47_surface_backlinks.www.tag, 'v0.1.32-antimatterium-www-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.32-antimatterium-www-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.www.backlink_id, 'eebb0a4ef643a7c9e5c12de6514898ec1bfd56f4ba9cef8ad82e1a892b1f4e0d');

  assert.equal(receipt.move47_surface_backlinks.org_profile.version, '0.0.30');
  assert.equal(receipt.move47_surface_backlinks.org_profile.tag, 'v0.0.30-antimatterium-org-profile-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.30-antimatterium-org-profile-control-v0221-backlink');
  assert.equal(receipt.move47_surface_backlinks.org_profile.backlink_id, 'c980cd92c9fc70b2d64609401c8b38a483111bf0340fc55f99087c0315c80a01');

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.move47_surface_backlinks_replayed, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.closure_id, '89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49');
  assert.equal(receipt.move48_surface_backlink_fanout_closure_id, '89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49');

  console.log('ANTIMATTERIUM_CONTROL_MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE47_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0221_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0236_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0132_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0030_BOUND=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
