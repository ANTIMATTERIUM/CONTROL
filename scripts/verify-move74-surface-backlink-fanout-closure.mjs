import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 74);
assert.equal(receipt.control_version, '0.2.35');
assert.equal(receipt.control_tag, 'v0.2.35-antimatterium-control-move73-surface-closure');
assert.equal(receipt.closes_surface_move, 73);

assert.equal(receipt.prior_control.version, '0.2.34');
assert.equal(receipt.prior_control.tag, 'v0.2.34-antimatterium-control-move71-surface-closure');
assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.34-antimatterium-control-move71-surface-closure');
assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28814745469');
assert.equal(receipt.prior_control.closure_id, 'c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b');

assert.equal(receipt.surfaces.core.version, '0.2.49');
assert.equal(receipt.surfaces.core.tag, 'v0.2.49-antimatterium-control-v0234-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.49-antimatterium-control-v0234-backlink');
assert.equal(receipt.surfaces.core.backlink_id, 'aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3');

assert.equal(receipt.surfaces.www.version, '0.1.45');
assert.equal(receipt.surfaces.www.tag, 'v0.1.45-antimatterium-www-control-v0234-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.45-antimatterium-www-control-v0234-backlink');
assert.equal(receipt.surfaces.www.backlink_id, '36a06a1af016dced71ed704201490562e438e2af885e083c8026fcd3ebf10548');

assert.equal(receipt.surfaces.org_profile.version, '0.0.43');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.43-antimatterium-org-profile-control-v0234-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.43-antimatterium-org-profile-control-v0234-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, '72fb0dd95579e32ff1143d2f0e2df6fd3aff5f9c50e35b4dad11763dda37f2c6');

assert.equal(receipt.closure.type, 'control_public_surface_backlink_fanout_closure');
assert.equal(receipt.closure.closed_move, 73);

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f');

console.log('ANTIMATTERIUM_CONTROL_MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE73_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0234_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0249_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0145_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0043_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE74_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
