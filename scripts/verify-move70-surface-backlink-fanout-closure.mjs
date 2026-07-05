import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE70_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 70);
assert.equal(receipt.control_version, '0.2.33');
assert.equal(receipt.control_tag, 'v0.2.33-antimatterium-control-move69-surface-closure');
assert.equal(receipt.closes_surface_move, 69);

assert.equal(receipt.prior_control.tag, 'v0.2.32-antimatterium-control-move67-surface-closure');
assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.32-antimatterium-control-move67-surface-closure');
assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747392917');
assert.equal(receipt.prior_control.closure_id, '26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f');

assert.equal(receipt.surfaces.core.version, '0.2.47');
assert.equal(receipt.surfaces.core.tag, 'v0.2.47-antimatterium-control-v0232-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.47-antimatterium-control-v0232-backlink');
assert.equal(receipt.surfaces.core.backlink_id, '57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802');

assert.equal(receipt.surfaces.www.version, '0.1.43');
assert.equal(receipt.surfaces.www.tag, 'v0.1.43-antimatterium-www-control-v0232-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.43-antimatterium-www-control-v0232-backlink');
assert.equal(receipt.surfaces.www.backlink_id, 'e4210f9ade5a9d97d0196b549692b08dc39a9522ff7560af48ed03d57eff7d86');

assert.equal(receipt.surfaces.org_profile.version, '0.0.41');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.41-antimatterium-org-profile-control-v0232-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.41-antimatterium-org-profile-control-v0232-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, '0bd3fcadae438a38c32aa9bcb06dfbb3ce8a37e85ee13b3ad15f831d4d5cccb9');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.closure_id, '6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b');

console.log('ANTIMATTERIUM_CONTROL_MOVE70_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE69_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0232_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0247_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0143_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0041_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE70_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
