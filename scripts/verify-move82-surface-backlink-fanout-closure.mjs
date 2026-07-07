import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE82_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 82);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.control_version, '0.2.39');
assert.equal(receipt.control_tag, 'v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.closes_surface_move, 81);

assert.equal(receipt.source_control.version, '0.2.38');
assert.equal(receipt.source_control.tag, 'v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28893546825');
assert.equal(receipt.source_control.closure_id, '2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17');

assert.equal(receipt.surface_backlinks.core.version, '0.2.53');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.53-antimatterium-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.53-antimatterium-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, 'c95084dd908698c740b3e523863dc991a8630433f40024ee1e2a560a7eebcbd1');

assert.equal(receipt.surface_backlinks.www.version, '0.1.49');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.49-antimatterium-www-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.49-antimatterium-www-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '54babbe9a4164c3a93682287f2ec6cc2dc875c137e1cc0cab052b42a43a518c5');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.47');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.47-antimatterium-org-profile-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.47-antimatterium-org-profile-control-v0238-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '34cefba9a61620139341114138f03b0238ac973a770626f3b13cc1ee9f0e5091');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, 'cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556');

console.log('ANTIMATTERIUM_CONTROL_MOVE82_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE81_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0238_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0253_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0149_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0047_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE82_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
