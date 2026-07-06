import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE78_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 78);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.control_version, '0.2.37');
assert.equal(receipt.control_tag, 'v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.closes_surface_move, 77);

assert.equal(receipt.source_control.version, '0.2.36');
assert.equal(receipt.source_control.tag, 'v0.2.36-antimatterium-control-move75-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.36-antimatterium-control-move75-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28819796095');
assert.equal(receipt.source_control.closure_id, '990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d');

assert.equal(receipt.surface_backlinks.core.version, '0.2.51');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.51-antimatterium-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.51-antimatterium-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, '8aa73e300ade2ebea5ee2bc82b40a9c02fb4efddeba6d7dd29c51b20199685aa');

assert.equal(receipt.surface_backlinks.www.version, '0.1.47');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.47-antimatterium-www-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.47-antimatterium-www-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '2c45e1976d95ac366356ea2d18c7ee6ddcc6d394a1ea8fb3b92f806eb9a3648a');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.45');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.45-antimatterium-org-profile-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.45-antimatterium-org-profile-control-v0236-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '39d0be009618a6e0536780345b806fa1feb49c1d578048534fda26ba17693c89');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377');

console.log('ANTIMATTERIUM_CONTROL_MOVE78_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE77_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0236_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0251_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0147_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0045_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE78_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
