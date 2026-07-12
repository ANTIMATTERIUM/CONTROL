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

const receipt = JSON.parse(
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE124_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.60",
    "tag": "v0.2.60-antimatterium-control-move123-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.60-antimatterium-control-move123-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.59",
    "control_tag": "v0.2.59-antimatterium-control-move121-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.59-antimatterium-control-move121-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29204415342",
    "main_sha": "2272ea956e06360479736d5ba822022597ee78e8",
    "closure_id": "4633ac517d2311b52f13e3021a7949c711463504b2c682647433db4f95d62ba5"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.74",
      "tag": "v0.2.74-antimatterium-control-v0259-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.74-antimatterium-control-v0259-backlink",
      "main_sha": "3d0d9379237b631355ad59b0f820d4c81e8ff241",
      "backlink_id": "cb004f29b93e180831140816a3d137783c6aac8cf9c556d799761923696894a6"
    },
    "www": {
      "version": "0.1.70",
      "tag": "v0.1.70-antimatterium-www-control-v0259-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.70-antimatterium-www-control-v0259-backlink",
      "main_sha": "71a41818bde1da5254fdda837cf3c9544e54f35e",
      "backlink_id": "71804c5637cfb26d39388fc05168867aeca67036fc76ae40db47777d424a6ff2"
    },
    "org_profile": {
      "version": "0.0.68",
      "tag": "v0.0.68-antimatterium-org-profile-control-v0259-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.68-antimatterium-org-profile-control-v0259-backlink",
      "main_sha": "b25af73f19047f1d6dbb0e4ab5f6e3eb74b6defa",
      "backlink_id": "d4f1cdfced5fe1479d6b4f2731ea32667050de312a863a899056097bcf8f9f7d"
    }
  },
  "closure": {
    "move123_surface_backlinks_bound": true,
    "exact_public_tag_commits_required": true,
    "external_replay_required": true,
    "short_public_tag_required": true,
    "no_local_root_required": true
  },
  "safety": {
    "no_current_production_claim": true,
    "no_starship_claim": true,
    "no_physical_production_instructions": true
  },
  "closure_id": "236db452d82fe9fa222877afda4987e13583504e87a044860477476caffb771d"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE124_CHECK_FAILED ' +
      path +
      ': expected ' +
      JSON.stringify(wanted) +
      ', got ' +
      JSON.stringify(actual)
    );
  }
}

check('schema', receipt.schema, expected.schema);
check('move', receipt.move, 124);

check(
  'package.name',
  receipt.package?.name,
  expected.package.name
);

check(
  'package.version',
  receipt.package?.version,
  expected.package.version
);

check(
  'package.tag',
  receipt.package?.tag,
  expected.package.tag
);

check(
  'package.release',
  receipt.package?.release,
  expected.package.release
);

for (const key of [
  'control_version',
  'control_tag',
  'control_release',
  'verify_ci_run',
  'main_sha',
  'closure_id'
]) {
  check(
    'source_authority.' + key,
    receipt.source_authority?.[key],
    expected.source_authority[key]
  );
}

for (const surface of ['core', 'www', 'org_profile']) {
  for (const key of [
    'version',
    'tag',
    'release',
    'main_sha',
    'backlink_id'
  ]) {
    check(
      'surface_fanout.' + surface + '.' + key,
      receipt.surface_fanout?.[surface]?.[key],
      expected.surface_fanout[surface][key]
    );
  }
}

for (const key of [
  'move123_surface_backlinks_bound',
  'exact_public_tag_commits_required',
  'external_replay_required',
  'short_public_tag_required',
  'no_local_root_required'
]) {
  check(
    'closure.' + key,
    receipt.closure?.[key],
    true
  );
}

for (const key of [
  'no_current_production_claim',
  'no_starship_claim',
  'no_physical_production_instructions'
]) {
  check(
    'safety.' + key,
    receipt.safety?.[key],
    true
  );
}

check(
  'closure_id',
  receipt.closure_id,
  expected.closure_id
);

const canonical = structuredClone(receipt);
delete canonical.closure_id;

const recomputed = crypto
  .createHash('sha256')
  .update(stable(canonical))
  .digest('hex');

if (recomputed !== receipt.closure_id) {
  fail(
    'MOVE124_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE124_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE123_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0259_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0274_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0170_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0068_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE124_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
