import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE84_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 84);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.control_version, '0.2.40');
assert.equal(receipt.control_tag, 'v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.closes_surface_move, 83);

assert.equal(receipt.source_control.version, '0.2.39');
assert.equal(receipt.source_control.tag, 'v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28896213832');
assert.equal(receipt.source_control.closure_id, 'cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556');

assert.equal(receipt.surface_backlinks.core.version, '0.2.54');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.54-antimatterium-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.54-antimatterium-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, '1b0610067973f8527502495b58a7c745f36b081198b51f4398bf96f30b4dc7cb');

assert.equal(receipt.surface_backlinks.www.version, '0.1.50');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.50-antimatterium-www-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.50-antimatterium-www-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '4c7e0f8ea8b623fd5554c32ca358c0036f9bd82b65c1e95bae61c348fc69c990');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.48');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.48-antimatterium-org-profile-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.48-antimatterium-org-profile-control-v0239-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '07389863553ef6f06301e7ccbc5678c265067f59a0d5b40cd0d956a42f47e444');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a');

console.log('ANTIMATTERIUM_CONTROL_MOVE84_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE83_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0239_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0254_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0150_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0048_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE84_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
