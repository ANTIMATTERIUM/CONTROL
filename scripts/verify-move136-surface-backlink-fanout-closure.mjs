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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE136_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.66",
    "tag": "v0.2.66-antimatterium-control-move135-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.66-antimatterium-control-move135-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.65",
    "control_tag": "v0.2.65-antimatterium-control-move133-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.65-antimatterium-control-move133-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29362695665",
    "main_sha": "bd3e4e02c1b923785607687b36bf1d082042c348",
    "closure_id": "0e5c9918ca4ba76f44577b62549888dadad5464cdc170e5ed7b7835b9107fbd0"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.80",
      "tag": "v0.2.80-antimatterium-control-v0265-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.80-antimatterium-control-v0265-backlink",
      "main_sha": "cc11e198d2ee3ed22803a06f503bf2324e8642a6",
      "backlink_id": "abb30f6f935d6c939237154b47e8966121bf8f9c506353a45aa0e7f2c4616da2"
    },
    "www": {
      "version": "0.1.76",
      "tag": "v0.1.76-antimatterium-www-control-v0265-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.76-antimatterium-www-control-v0265-backlink",
      "main_sha": "9bd75a52248251b109bc14d538b0fd256cc57a76",
      "backlink_id": "e83f7e556c976ea2c8ab56c23e579128b7bc004648c2d90d6e73310840bc24fa"
    },
    "org_profile": {
      "version": "0.0.74",
      "tag": "v0.0.74-antimatterium-org-profile-control-v0265-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.74-antimatterium-org-profile-control-v0265-backlink",
      "main_sha": "c39f6c0ad0b671e5ea3b93511af4f2e78eb774fb",
      "backlink_id": "642a078b237d35fd2e8f15d79825890c23089aa415b15deb9d6718aebeff7f78"
    }
  },
  "closure": {
    "move135_surface_backlinks_bound": true,
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
  "closure_id": "383ec0b39d241554ed32fce6765cf5c511d4e08e77fe125b309c1cd559dd71c3"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE136_CHECK_FAILED ' +
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
  'move135_surface_backlinks_bound',
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
    'MOVE136_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE136_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE135_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0265_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0280_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0176_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0074_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE136_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
