import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../control/ANTIMATTERIUM_CONTROL_MOVE46_SURFACE_BACKLINK_FANOUT_CLOSURE.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('CONTROL closes Move 45 public surface backlink fanout', () => {
  assert.equal(pkg.name, '@antimatterium/control');
  assert.match(pkg.version, /^0\.2\.(21|22|23)$/);

  assert.equal(receipt.package_name, '@antimatterium/control');
  assert.equal(receipt.package_version, '0.2.21');

  assert.equal(receipt.prior_control.version, '0.2.20');
  assert.equal(receipt.prior_control.tag, 'v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525467798');
  assert.equal(receipt.prior_control.closure_id, '0a336efeec3df03622df1814eeb076ba69a3e181006fe52add05c71a05704efc');

  assert.equal(receipt.surface_backlinks.core.version, '0.2.35');
  assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.35-antimatterium-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.35-antimatterium-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.core.backlink_id, '3438d6411b8fc4174a1003bdb20be46f57e3a766215dddf266a82679d4c47c7f');

  assert.equal(receipt.surface_backlinks.www.version, '0.1.31');
  assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.31-antimatterium-www-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.31-antimatterium-www-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.www.backlink_id, '7417aacc04c2857dbca3719ee2285bb4d865ff34fda61ad1d6e56932758d578c');

  assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.29');
  assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.29-antimatterium-org-profile-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.29-antimatterium-org-profile-control-v0220-backlink');
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, 'f6bba38cebb15dfd783a46a861817e7c43ce3839e378e9526dfbe8bffd09685f');

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.closure_id, '84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');
  assert.equal(receipt.MOVE46_SURFACE_BACKLINK_FANOUT_CLOSURE_ID, '84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');

  console.log('ANTIMATTERIUM_CONTROL_MOVE46_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_MOVE45_SURFACE_BACKLINKS_BOUND=true');
  console.log('ANTIMATTERIUM_CONTROL_V0220_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_V0235_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_V0131_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_V0029_BOUND=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('MOVE46_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
