import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 68);
assert.equal(receipt.control_version, '0.2.32');
assert.equal(receipt.control_tag, 'v0.2.32-antimatterium-control-move67-surface-closure');
assert.equal(receipt.closes_surface_move, 67);

assert.equal(receipt.prior_control.tag, 'v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.prior_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.prior_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28746575495');
assert.equal(receipt.prior_control.closure_id, 'ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d');

assert.equal(receipt.surfaces.core.version, '0.2.46');
assert.equal(receipt.surfaces.core.tag, 'v0.2.46-antimatterium-control-v0231-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.46-antimatterium-control-v0231-backlink');
assert.equal(receipt.surfaces.core.backlink_id, 'b59e89409997dfdb99f1aad7ff2078e83e3732725fd7f8d6c8930ef598f98cb9');

assert.equal(receipt.surfaces.www.version, '0.1.42');
assert.equal(receipt.surfaces.www.tag, 'v0.1.42-antimatterium-www-control-v0231-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.42-antimatterium-www-control-v0231-backlink');
assert.equal(receipt.surfaces.www.backlink_id, '0c429e30935cfead1be7aee0b2c3b049b2ee8d747d2588de68ea8e4bfa4f9ffd');

assert.equal(receipt.surfaces.org_profile.version, '0.0.40');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.40-antimatterium-org-profile-control-v0231-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.40-antimatterium-org-profile-control-v0231-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, 'ef20e78521439412e271acc4d126a2b1d30bda8b241e7f16484eeaea133b6bd2');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.closure_id, '26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f');

console.log('ANTIMATTERIUM_CONTROL_MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE67_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0231_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0246_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0142_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0040_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE68_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
