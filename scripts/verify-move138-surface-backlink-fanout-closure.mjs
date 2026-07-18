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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE138_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.67",
    "tag": "v0.2.67-antimatterium-control-move137-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.67-antimatterium-control-move137-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.66",
    "control_tag": "v0.2.66-antimatterium-control-move135-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.66-antimatterium-control-move135-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29578377132",
    "main_sha": "857f266bfa84b652e96de28e93e288667d379013",
    "closure_id": "383ec0b39d241554ed32fce6765cf5c511d4e08e77fe125b309c1cd559dd71c3"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.81",
      "tag": "v0.2.81-antimatterium-control-v0266-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.81-antimatterium-control-v0266-backlink",
      "main_sha": "dfeaa2408bb463958e282924d2e69859b30aec33",
      "backlink_id": "639f86df6ccd79826c36d0fe9ffa2cc00571e878c1f6f81101ac6fba476cdfaf"
    },
    "www": {
      "version": "0.1.77",
      "tag": "v0.1.77-antimatterium-www-control-v0266-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.77-antimatterium-www-control-v0266-backlink",
      "main_sha": "a3ad4e5cd301d65b96ce823d06dff152cca6758f",
      "backlink_id": "26be9d8d6b914ebf457e6f750a975c786d168f7924e08768591fdbf1e57546bf"
    },
    "org_profile": {
      "version": "0.0.75",
      "tag": "v0.0.75-antimatterium-org-profile-control-v0266-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.75-antimatterium-org-profile-control-v0266-backlink",
      "main_sha": "c72d8f888d06adff160045ed4f31de7b308a8ca8",
      "backlink_id": "8be404a6ff387e6c597ad97b20315f190b758fe5e3c1cbb9a29933779eb1795b"
    }
  },
  "closure": {
    "move137_surface_backlinks_bound": true,
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
  "closure_id": "fbc4bbb9a4f22f09657e0a5e9c9e1c6061e8640272e6c87dfc6b20933f3014a1"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE138_CHECK_FAILED ' +
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
  'move137_surface_backlinks_bound',
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
    'MOVE138_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE138_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE137_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0266_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0281_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0177_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0075_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE138_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
