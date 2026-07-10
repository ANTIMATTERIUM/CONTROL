import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE94_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));
const { closure, ...base } = receipt;
const expectedClosureId = crypto.createHash('sha256').update(JSON.stringify(base)).digest('hex');

assert.equal(receipt.schema, 'antimatterium.control.move94.surface_backlink_fanout_closure.v1');
assert.equal(receipt.move, 94);
assert.equal(receipt.relation, 'control_closes_move93_surface_backlink_fanout');

assert.equal(receipt.control.version, '0.2.45');
assert.equal(receipt.control.release_tag, 'v0.2.45-antimatterium-control-move93-surface-closure');

assert.equal(receipt.source_control.version, '0.2.44');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.44-antimatterium-control-move91-surface-closure');
assert.equal(receipt.source_control.tag, 'v0.2.44-antimatterium-control-move91-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29050784336');
assert.equal(receipt.source_control.closure_id, '12b7a23e6b4691c991c4a4321b299fc963120a35b22c362e466b66121eddab54');
assert.equal(receipt.source_control.main_sha, '5673ca092d58ec7a5d42f847e47889c77e3432a2');

assert.equal(receipt.closed_surface_backlinks.length, 3);

const core = receipt.closed_surface_backlinks.find((entry) => entry.key === 'CORE');
const www = receipt.closed_surface_backlinks.find((entry) => entry.key === 'WWW');
const org = receipt.closed_surface_backlinks.find((entry) => entry.key === 'ORG_PROFILE');

assert.ok(core);
assert.ok(www);
assert.ok(org);

assert.equal(core.version, '0.2.59');
assert.equal(core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.59-antimatterium-control-v0244-backlink');
assert.equal(core.tag, 'v0.2.59-antimatterium-control-v0244-backlink');
assert.equal(core.backlink_id, '8dad72a77f2689a045ead5bc309bbe29c967f5547bb59f16c9fdd84153f156b6');

assert.equal(www.version, '0.1.55');
assert.equal(www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.55-antimatterium-www-control-v0244-backlink');
assert.equal(www.tag, 'v0.1.55-antimatterium-www-control-v0244-backlink');
assert.equal(www.backlink_id, 'd34f04a80e5e88e06dbf3ed158969098cd65bbe8f9ed8bdf50fa81a89b77503e');

assert.equal(org.version, '0.0.53');
assert.equal(org.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.53-antimatterium-org-profile-control-v0244-backlink');
assert.equal(org.tag, 'v0.0.53-antimatterium-org-profile-control-v0244-backlink');
assert.equal(org.backlink_id, '752da614cc114594a30853aa1a1d075dab8cd75d12af945299eb261e0539fa0a');

assert.equal(receipt.public_constraints.short_public_tag_required, true);
assert.equal(receipt.public_constraints.no_local_root_required, true);
assert.equal(receipt.public_constraints.no_current_production_claim, true);
assert.equal(receipt.public_constraints.no_starship_claim, true);
assert.equal(receipt.public_constraints.no_physical_production_instructions, true);

assert.equal(closure.id, expectedClosureId);
assert.equal(closure.kind, 'move93_surface_backlink_fanout_closure');
assert.equal(closure.closed, true);

console.log('ANTIMATTERIUM_CONTROL_MOVE94_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE93_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0244_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0259_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0155_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0053_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE94_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + closure.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
