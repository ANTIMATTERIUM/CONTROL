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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.69",
    "tag": "v0.2.69-antimatterium-control-move141-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.69-antimatterium-control-move141-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.68",
    "control_tag": "v0.2.68-antimatterium-control-move139-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.68-antimatterium-control-move139-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29654567950",
    "main_sha": "1b72f44cd0887ae62c23499274b1d023df35a9d1",
    "closure_id": "d952f0926fbb5036879e354b301b8a17a77bb1088a133be7494590ad69de2b1e"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.83",
      "tag": "v0.2.83-antimatterium-control-v0268-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.83-antimatterium-control-v0268-backlink",
      "main_sha": "e28113708a52bd404bb321c6b5b786f72990b1c0",
      "backlink_id": "1e5f194d9622e0abe5c7316d0d45a5b73f48b9854edc89e943498f52a405ed83"
    },
    "www": {
      "version": "0.1.79",
      "tag": "v0.1.79-antimatterium-www-control-v0268-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.79-antimatterium-www-control-v0268-backlink",
      "main_sha": "d424b8734f5db89a0d177364758d5b9a694e9886",
      "backlink_id": "1d50ba398ce01f070a35153e1ad74e7460edb9ae95e97a58b57d5a9b529e3ea6"
    },
    "org_profile": {
      "version": "0.0.77",
      "tag": "v0.0.77-antimatterium-org-profile-control-v0268-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.77-antimatterium-org-profile-control-v0268-backlink",
      "main_sha": "35a03a9daeb3c9d117df67685e7d4c8e4dd31e01",
      "backlink_id": "dc0832d31542e4d403483a7a213a02992e70950cc3d20c1002af4648a4c16dcc"
    }
  },
  "closure": {
    "move141_surface_backlinks_bound": true,
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
  "closure_id": "63c59d3b79e4d34cec2f33f72fc898aba3e8a1311f664f62b247107054b2b31d"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE142_CHECK_FAILED ' +
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
  'move141_surface_backlinks_bound',
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
    'MOVE142_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE141_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0268_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0283_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0179_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0077_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE142_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
