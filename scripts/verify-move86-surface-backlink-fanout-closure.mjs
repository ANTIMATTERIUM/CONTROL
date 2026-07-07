import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE86_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 84);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.control_version, '0.2.41');
assert.equal(receipt.control_tag, 'v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.closes_surface_move, 83);

assert.equal(receipt.source_control.version, '0.2.40');
assert.equal(receipt.source_control.tag, 'v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28898964616');
assert.equal(receipt.source_control.closure_id, '1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a');

assert.equal(receipt.surface_backlinks.core.version, '0.2.54');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.55-antimatterium-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.55-antimatterium-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, '1d898fa91a0cd0730e50ff185edef41efea12058bb35b08abbecb83afb824e9d');

assert.equal(receipt.surface_backlinks.www.version, '0.1.50');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.51-antimatterium-www-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.51-antimatterium-www-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '25f25e7b040768c90d7abe7be51e7ad2b5d97c45fa2069b53aa8ceb77a8ef464');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.48');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.49-antimatterium-org-profile-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.49-antimatterium-org-profile-control-v0240-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, 'ef767654bc0f6b7282a8367af9a048dea131d12247c15ea39edc283631bbed07');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542');

console.log('ANTIMATTERIUM_CONTROL_MOVE86_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE85_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0240_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0255_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0151_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0049_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE86_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
