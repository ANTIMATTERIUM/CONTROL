import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE88_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.move88.surface_backlink_fanout_closure.v1');
assert.equal(receipt.move, 88);
assert.equal(receipt.control_version, '0.2.42');
assert.equal(receipt.closes_move, 87);

assert.equal(receipt.source_control.version, '0.2.41');
assert.equal(receipt.source_control.tag, 'v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28900560674');
assert.equal(receipt.source_control.closure_id, '448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542');

assert.equal(receipt.surface_backlinks.core.version, '0.2.56');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.56-antimatterium-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.56-antimatterium-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, '4622bd6ad3a04a2808e7d35584d7862c3f14f02ab716206ea743d3611c6e7a57');

assert.equal(receipt.surface_backlinks.www.version, '0.1.52');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.52-antimatterium-www-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.52-antimatterium-www-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '19d230a33c603d7e211e35746da61423e9a54fcf9dba4961e28c785060b94b2e');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.50');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.50-antimatterium-org-profile-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.50-antimatterium-org-profile-control-v0241-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '12a9a1874bfbb2c74162766daebb6eda020409f41285ceeab962ed9c14c7c163');

assert.equal(receipt.closure.short_public_tag_required, true);
assert.equal(receipt.closure.no_local_root_required, true);
assert.equal(receipt.closure.move87_surface_backlinks_replayed, true);

assert.equal(receipt.safety.no_current_production_claim, true);
assert.equal(receipt.safety.no_starship_claim, true);
assert.equal(receipt.safety.no_physical_production_instructions, true);

const clone = structuredClone(receipt);
delete clone.closure.id;
const expectedId = crypto.createHash('sha256').update(JSON.stringify(clone)).digest('hex');
assert.equal(receipt.closure.id, expectedId);

console.log('ANTIMATTERIUM_CONTROL_MOVE88_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE87_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0241_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0256_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0152_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0050_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE88_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
