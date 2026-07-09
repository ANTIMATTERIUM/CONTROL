import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE92_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.move92.surface_backlink_fanout_closure.v1');
assert.equal(receipt.move, 92);
assert.equal(receipt.closes_move, 91);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.version, '0.2.44');

assert.equal(receipt.source_control.version, '0.2.43');
assert.equal(receipt.source_control.tag, 'v0.2.43-antimatterium-control-move89-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.43-antimatterium-control-move89-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29045944783');
assert.equal(receipt.source_control.closure_id, 'f433b1fa1c47217bffbd8561ffa1547ae30629b3ef5ee9c6d94fccdaf679548e');

assert.equal(receipt.surfaces.core.version, '0.2.58');
assert.equal(receipt.surfaces.core.tag, 'v0.2.58-antimatterium-control-v0243-backlink');
assert.equal(receipt.surfaces.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.58-antimatterium-control-v0243-backlink');
assert.equal(receipt.surfaces.core.backlink_id, 'd5a4ed5ae56e95aab3c2acd2a6e44619aca88b18e6860290218e681b9e7e40f0');

assert.equal(receipt.surfaces.www.version, '0.1.54');
assert.equal(receipt.surfaces.www.tag, 'v0.1.54-antimatterium-www-control-v0243-backlink');
assert.equal(receipt.surfaces.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.54-antimatterium-www-control-v0243-backlink');
assert.equal(receipt.surfaces.www.backlink_id, '6d8e6e66bba6468800625040a5256131a0357c55f889c32e74e4de58ce6701b1');

assert.equal(receipt.surfaces.org_profile.version, '0.0.52');
assert.equal(receipt.surfaces.org_profile.tag, 'v0.0.52-antimatterium-org-profile-control-v0243-backlink');
assert.equal(receipt.surfaces.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.52-antimatterium-org-profile-control-v0243-backlink');
assert.equal(receipt.surfaces.org_profile.backlink_id, '7093487b83d8235ecf727634e0e01d7b2b775405f9eb87955107402163e390ee');

assert.equal(receipt.closure.move91_surface_backlinks_replayed, true);
assert.equal(receipt.closure.short_public_tag_required, true);
assert.equal(receipt.closure.no_local_root_required, true);

assert.equal(receipt.safety.no_current_production_claim, true);
assert.equal(receipt.safety.no_starship_claim, true);
assert.equal(receipt.safety.no_physical_production_instructions, true);

const clone = structuredClone(receipt);
delete clone.closure.id;
const expected = crypto.createHash('sha256').update(JSON.stringify(clone)).digest('hex');
assert.equal(receipt.closure.id, expected);

console.log('ANTIMATTERIUM_CONTROL_MOVE92_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE91_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0243_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0258_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0154_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0052_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE92_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
