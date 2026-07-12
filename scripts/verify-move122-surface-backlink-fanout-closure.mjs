#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function stable(value) {
  if (Array.isArray(value)) {
    return '[' + value.map(stable).join(',') + ']';
  }

  if (value && typeof value === 'object') {
    return '{' + Object.keys(value)
      .sort()
      .map(key => JSON.stringify(key) + ':' + stable(value[key]))
      .join(',') + '}';
  }

  return JSON.stringify(value);
}

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));
const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 122,
  "closesMove": 121,
  "controlVersion": "0.2.59",
  "controlTag": "v0.2.59-antimatterium-control-move121-surface-closure",
  "controlRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.59-antimatterium-control-move121-surface-closure",
  "sourceVersion": "0.2.58",
  "sourceTag": "v0.2.58-antimatterium-control-move119-surface-closure",
  "sourceRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.58-antimatterium-control-move119-surface-closure",
  "sourceCi": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29200037531",
  "sourceSha": "e9ba24b46fb5ea31d036e0db1eb698946af75353",
  "sourceClosureId": "cb9d670f584aa1a966bbcb5f2cd36aa1da7ac6bd8a68f36ac283a79d776f34dd",
  "coreVersion": "0.2.73",
  "coreTag": "v0.2.73-antimatterium-control-v0258-backlink",
  "coreRelease": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.73-antimatterium-control-v0258-backlink",
  "coreId": "749361e6fbc56709a0564fc58eaae2a11ac82ba7ed91c7dee111639041290396",
  "wwwVersion": "0.1.69",
  "wwwTag": "v0.1.69-antimatterium-www-control-v0258-backlink",
  "wwwRelease": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.69-antimatterium-www-control-v0258-backlink",
  "wwwId": "52d52363aec015ecdad4f846be5eba8dc79a6b5aa6e0501ac130c00a32c6c7be",
  "orgVersion": "0.0.67",
  "orgTag": "v0.0.67-antimatterium-org-profile-control-v0258-backlink",
  "orgRelease": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.67-antimatterium-org-profile-control-v0258-backlink",
  "orgId": "b9bc695553018439f5c97941d047ae155e5113de4a3de1e3386bdfde99d02bd1",
  "closureId": "4633ac517d2311b52f13e3021a7949c711463504b2c682647433db4f95d62ba5"
};

const checks = [
  ['schema', receipt.schema, expected.schema],
  ['move', receipt.move, expected.move],
  ['closes_move', receipt.closes_move, expected.closesMove],
  ['control.version', receipt.control?.version, expected.controlVersion],
  ['control.tag', receipt.control?.tag, expected.controlTag],
  ['control.release', receipt.control?.release, expected.controlRelease],
  ['authority.version', receipt.authority?.version, expected.sourceVersion],
  ['authority.tag', receipt.authority?.tag, expected.sourceTag],
  ['authority.release', receipt.authority?.release, expected.sourceRelease],
  ['authority.verify_ci_run', receipt.authority?.verify_ci_run, expected.sourceCi],
  ['authority.main_sha', receipt.authority?.main_sha, expected.sourceSha],
  ['authority.closure_id', receipt.authority?.closure_id, expected.sourceClosureId],
  ['surfaces.core.version', receipt.surfaces?.core?.version, expected.coreVersion],
  ['surfaces.core.tag', receipt.surfaces?.core?.tag, expected.coreTag],
  ['surfaces.core.release', receipt.surfaces?.core?.release, expected.coreRelease],
  ['surfaces.core.backlink_id', receipt.surfaces?.core?.backlink_id, expected.coreId],
  ['surfaces.www.version', receipt.surfaces?.www?.version, expected.wwwVersion],
  ['surfaces.www.tag', receipt.surfaces?.www?.tag, expected.wwwTag],
  ['surfaces.www.release', receipt.surfaces?.www?.release, expected.wwwRelease],
  ['surfaces.www.backlink_id', receipt.surfaces?.www?.backlink_id, expected.wwwId],
  ['surfaces.org_profile.version', receipt.surfaces?.org_profile?.version, expected.orgVersion],
  ['surfaces.org_profile.tag', receipt.surfaces?.org_profile?.tag, expected.orgTag],
  ['surfaces.org_profile.release', receipt.surfaces?.org_profile?.release, expected.orgRelease],
  ['surfaces.org_profile.backlink_id', receipt.surfaces?.org_profile?.backlink_id, expected.orgId],
  ['closure.move121_surface_backlinks_bound', receipt.closure?.move121_surface_backlinks_bound, true],
  ['closure.move121_surface_backlinks_replayable', receipt.closure?.move121_surface_backlinks_replayable, true],
  ['closure.public_surface_backlink_fanout_closed', receipt.closure?.public_surface_backlink_fanout_closed, true],
  ['closure.short_public_tag_required', receipt.closure?.short_public_tag_required, true],
  ['closure.no_local_root_required', receipt.closure?.no_local_root_required, true],
  ['safety.no_current_production_claim', receipt.safety?.no_current_production_claim, true],
  ['safety.no_starship_claim', receipt.safety?.no_starship_claim, true],
  ['safety.no_physical_production_instructions', receipt.safety?.no_physical_production_instructions, true],
  ['closure_id', receipt.closure_id, expected.closureId]
];

for (const [name, actual, wanted] of checks) {
  if (actual !== wanted) {
    fail(
      'MOVE122_CHECK_FAILED ' +
      name +
      ': expected ' +
      wanted +
      ', got ' +
      actual
    );
  }
}

const canonical = structuredClone(receipt);
delete canonical.closure_id;

const recomputed = crypto
  .createHash('sha256')
  .update(stable(canonical))
  .digest('hex');

if (recomputed !== receipt.closure_id) {
  fail(
    'MOVE122_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log('ANTIMATTERIUM_CONTROL_MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE121_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0258_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0273_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0169_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0067_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE122_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
