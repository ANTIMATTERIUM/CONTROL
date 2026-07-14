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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE134_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.65",
    "tag": "v0.2.65-antimatterium-control-move133-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.65-antimatterium-control-move133-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.64",
    "control_tag": "v0.2.64-antimatterium-control-move131-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.64-antimatterium-control-move131-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29361021498",
    "main_sha": "29f697a9c6711b9338794fb4ccde24b90d0590f5",
    "closure_id": "0d825bba6e10b333ca0ce5d613b5c0c151a340d6ab4cc6ba485175545d44952e"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.79",
      "tag": "v0.2.79-antimatterium-control-v0264-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.79-antimatterium-control-v0264-backlink",
      "main_sha": "b3ceb9bced2f06f51573328ca13d0da6fd8697e4",
      "backlink_id": "62b0293a7927a3bbf668a7c52708540f79e6675217ca561badcae12f8c7545b0"
    },
    "www": {
      "version": "0.1.75",
      "tag": "v0.1.75-antimatterium-www-control-v0264-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.75-antimatterium-www-control-v0264-backlink",
      "main_sha": "cdcecd41dd65cc92092100c69f93a2ec8acc9f4b",
      "backlink_id": "6aec669e8e7d8a915570c5c49fc2bbf78846b5ea38d7561989e9378ce8d59efc"
    },
    "org_profile": {
      "version": "0.0.73",
      "tag": "v0.0.73-antimatterium-org-profile-control-v0264-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.73-antimatterium-org-profile-control-v0264-backlink",
      "main_sha": "714aee9417abe51f79a114c71fdbf5fb7b3cff71",
      "backlink_id": "4cab00fb8e7aac50cc5f346fb458ff102b1b0a2dfc27626518efb3e0d5f124eb"
    }
  },
  "closure": {
    "move133_surface_backlinks_bound": true,
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
  "closure_id": "0e5c9918ca4ba76f44577b62549888dadad5464cdc170e5ed7b7835b9107fbd0"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE134_CHECK_FAILED ' +
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
  'move133_surface_backlinks_bound',
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
    'MOVE134_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE134_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE133_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0264_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0279_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0175_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0073_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE134_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
