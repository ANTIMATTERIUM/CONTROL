import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE72_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 72);
assert.equal(receipt.control_version, '0.2.34');
assert.equal(receipt.control_tag, 'v0.2.34-antimatterium-control-move71-surface-closure');
assert.equal(receipt.closes_surface_move, 71);

assert.equal(receipt.prior_control.tag, 'v0.2.33-antimatterium-control-move69-surface-closure');
assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.33-antimatterium-control-move69-surface-closure');
assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747726663');
assert.equal(receipt.prior_control.closure_id, '6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b');

assert.equal(receipt.surfaces.core.version, '0.2.48');
assert.equal(receipt.surfaces.core.tag, 'v0.2.48-antimatterium-control-v0233-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.48-antimatterium-control-v0233-backlink');
assert.equal(receipt.surfaces.core.backlink_id, 'e530e13a78d4bd2d5d77303b8f58c7bb3402f826defb5769e96f57410a27fb47');

assert.equal(receipt.surfaces.www.version, '0.1.44');
assert.equal(receipt.surfaces.www.tag, 'v0.1.44-antimatterium-www-control-v0233-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.44-antimatterium-www-control-v0233-backlink');
assert.equal(receipt.surfaces.www.backlink_id, '7c13483fe112563dc28a2e5eee9322745611fc62ba2f426cf12b82a3ae548e62');

assert.equal(receipt.surfaces.org_profile.version, '0.0.42');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.42-antimatterium-org-profile-control-v0233-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.42-antimatterium-org-profile-control-v0233-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, 'da69ca9e87525e415cf2f48eebfc35bda2d480669bce7aaa18006581836d5e01');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.closure_id, 'c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b');

console.log('ANTIMATTERIUM_CONTROL_MOVE72_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE71_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0233_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0248_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0144_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0042_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE72_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
