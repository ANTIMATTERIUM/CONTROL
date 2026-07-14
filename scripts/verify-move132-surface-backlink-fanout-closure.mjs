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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE132_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.64",
    "tag": "v0.2.64-antimatterium-control-move131-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.64-antimatterium-control-move131-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.63",
    "control_tag": "v0.2.63-antimatterium-control-move129-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.63-antimatterium-control-move129-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29206398893",
    "main_sha": "afada789807ee3333e6c45a6f29aff5790d5ea05",
    "closure_id": "94889ea04b57855f99f8cff464dc287b3ca518a9f0d38732dd3adc7e26040c05"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.78",
      "tag": "v0.2.78-antimatterium-control-v0263-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.78-antimatterium-control-v0263-backlink",
      "main_sha": "1a099dacb9921d86098632df38cf7701e789989e",
      "backlink_id": "7ec19076c167c3a4a19ecd21731493ecfc5ddba72fca93b8fb7e61e3ae164fca"
    },
    "www": {
      "version": "0.1.74",
      "tag": "v0.1.74-antimatterium-www-control-v0263-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.74-antimatterium-www-control-v0263-backlink",
      "main_sha": "ac192a1f2b5cf3878fde725341651e109b970094",
      "backlink_id": "fdaacb9bd57430ce4c23c3bb38039bee37c17ba7e43f16d0c21857c1b13ad6da"
    },
    "org_profile": {
      "version": "0.0.72",
      "tag": "v0.0.72-antimatterium-org-profile-control-v0263-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.72-antimatterium-org-profile-control-v0263-backlink",
      "main_sha": "660df3998617652c0575ec0a7eadd5e7514a5e9b",
      "backlink_id": "d72b8f06bb92dc6232a36cdbe063f3d5e30d714484bb199c86f6a592ed5f136b"
    }
  },
  "closure": {
    "move131_surface_backlinks_bound": true,
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
  "closure_id": "0d825bba6e10b333ca0ce5d613b5c0c151a340d6ab4cc6ba485175545d44952e"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE132_CHECK_FAILED ' +
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
  'move131_surface_backlinks_bound',
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
    'MOVE132_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE132_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE131_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0263_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0278_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0174_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0072_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE132_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
