import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('control/ANTIMATTERIUM_CONTROL_MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.control.public_surface_backlink_fanout_closure.receipt.v1');
assert.equal(receipt.move, 80);
assert.equal(receipt.package, '@antimatterium/control');
assert.equal(receipt.control_version, '0.2.38');
assert.equal(receipt.control_tag, 'v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.closes_surface_move, 79);

assert.equal(receipt.source_control.version, '0.2.37');
assert.equal(receipt.source_control.tag, 'v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28821621138');
assert.equal(receipt.source_control.closure_id, '4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377');

assert.equal(receipt.surface_backlinks.core.version, '0.2.52');
assert.equal(receipt.surface_backlinks.core.tag, 'v0.2.52-antimatterium-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.core.release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.52-antimatterium-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.core.backlink_id, 'c25af4d72c54aba8a6eaa02cea9493b25da8b67aa427d72c9d85898a2f5f7367');

assert.equal(receipt.surface_backlinks.www.version, '0.1.48');
assert.equal(receipt.surface_backlinks.www.tag, 'v0.1.48-antimatterium-www-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.www.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.48-antimatterium-www-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.www.backlink_id, '834907d3ec61ec57ce1b4f21063bfeb285fcaff3c62ffc32508d9761e553e0c2');

assert.equal(receipt.surface_backlinks.org_profile.version, '0.0.46');
assert.equal(receipt.surface_backlinks.org_profile.tag, 'v0.0.46-antimatterium-org-profile-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.org_profile.release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.46-antimatterium-org-profile-control-v0237-backlink');
assert.equal(receipt.surface_backlinks.org_profile.backlink_id, '0fb8c55049f0017a7d9dee82bfaca9283ea3429bcf4c5a83ad6e5c916ebd9517');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.closure_id, '2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17');

console.log('ANTIMATTERIUM_CONTROL_MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE79_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0237_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0252_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0148_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0046_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE80_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
