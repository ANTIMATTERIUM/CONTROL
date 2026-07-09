import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE90_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.move90.surface_backlink_fanout_closure.v1');
assert.equal(receipt.move, 90);
assert.equal(receipt.control_version, '0.2.43');
assert.equal(receipt.closes_move, 89);

assert.equal(receipt.source_control.version, '0.2.42');
assert.equal(receipt.source_control.tag, 'v0.2.42-antimatterium-control-move87-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.42-antimatterium-control-move87-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28901274914');
assert.equal(receipt.source_control.closure_id, '280a205f6631f33300cfd7d5c25c791877823bd52fbcc9d7544d85d561401d4b');

assert.equal(receipt.surface_backlinks.core.version, '0.2.57');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.57-antimatterium-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.57-antimatterium-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, '62a662535ce7b8ef330cd8b36f01ebbf441a93c5f1237aa50bc86f4a20ba7999');

assert.equal(receipt.surface_backlinks.www.version, '0.1.53');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.53-antimatterium-www-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.53-antimatterium-www-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '5dfbbee5ba6f95a1dd0d67c904f0d7096f86c03a8f9439e3b0c6fcf4aa522bde');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.51');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.51-antimatterium-org-profile-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.51-antimatterium-org-profile-control-v0242-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, 'e4cd86e04bc42932db03b3dd55c2ff44e0b84c864bce83ef60ec0d0b6c209d09');

assert.equal(receipt.closure.short_public_tag_required, true);
assert.equal(receipt.closure.no_local_root_required, true);
assert.equal(receipt.closure.move89_surface_backlinks_replayed, true);

assert.equal(receipt.safety.no_current_production_claim, true);
assert.equal(receipt.safety.no_starship_claim, true);
assert.equal(receipt.safety.no_physical_production_instructions, true);

const clone = structuredClone(receipt);
delete clone.closure.id;
const expectedId = crypto.createHash('sha256').update(JSON.stringify(clone)).digest('hex');
assert.equal(receipt.closure.id, expectedId);

console.log('ANTIMATTERIUM_CONTROL_MOVE90_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE89_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0242_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0257_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0153_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0051_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE90_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
