import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 76);
assert.equal(receipt.control_version, '0.2.36');
assert.equal(receipt.control_tag, 'v0.2.36-antimatterium-control-move75-surface-closure');
assert.equal(receipt.closes_surface_move, 75);

assert.equal(receipt.prior_control.version, '0.2.35');
assert.equal(receipt.prior_control.tag, 'v0.2.35-antimatterium-control-move73-surface-closure');
assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.35-antimatterium-control-move73-surface-closure');
assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28817843561');
assert.equal(receipt.prior_control.closure_id, '2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f');

assert.equal(receipt.surfaces.core.version, '0.2.50');
assert.equal(receipt.surfaces.core.tag, 'v0.2.50-antimatterium-control-v0235-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.50-antimatterium-control-v0235-backlink');
assert.equal(receipt.surfaces.core.backlink_id, 'a56cd46dc7dd7d61a55de4d2137f5fa8703c551c61700cac223833a944ff6464');

assert.equal(receipt.surfaces.www.version, '0.1.46');
assert.equal(receipt.surfaces.www.tag, 'v0.1.46-antimatterium-www-control-v0235-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.46-antimatterium-www-control-v0235-backlink');
assert.equal(receipt.surfaces.www.backlink_id, '990a25dc7da43d5ec3235d11c621f53e6e81a12d591c03fc3351f311e4598cd5');

assert.equal(receipt.surfaces.org_profile.version, '0.0.44');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.44-antimatterium-org-profile-control-v0235-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.44-antimatterium-org-profile-control-v0235-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, '06acd3d0c1f4ef483dcdfe90697f8189203c8c5156b1e57a81b7fe5649c629a9');

assert.equal(receipt.closure.type, 'control_public_surface_backlink_fanout_closure');
assert.equal(receipt.closure.closed_move, 75);

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d');

console.log('ANTIMATTERIUM_CONTROL_MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE75_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0235_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0250_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0146_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0044_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE76_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
