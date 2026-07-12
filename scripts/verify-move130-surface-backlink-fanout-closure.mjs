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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE130_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.63",
    "tag": "v0.2.63-antimatterium-control-move129-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.63-antimatterium-control-move129-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.62",
    "control_tag": "v0.2.62-antimatterium-control-move127-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.62-antimatterium-control-move127-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29206112554",
    "main_sha": "3e4e046ac5c477526c4c67695f8ee4cb41a3be48",
    "closure_id": "007e29815bc5e5ce89ab28897268ece2d61a503cc08b4add7a9a758249444edb"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.77",
      "tag": "v0.2.77-antimatterium-control-v0262-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.77-antimatterium-control-v0262-backlink",
      "main_sha": "0900e59b056c13d647bf2b1f8cbee0a053afc1d8",
      "backlink_id": "34ffa89537f39f62a3b6ae4b1cd54f64fd716a715a4936d80449abbff528e5c0"
    },
    "www": {
      "version": "0.1.73",
      "tag": "v0.1.73-antimatterium-www-control-v0262-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.73-antimatterium-www-control-v0262-backlink",
      "main_sha": "dd002a924b8d9d60a7dc162f965620a141c02d2f",
      "backlink_id": "60c2bf5f368b1d72a5e868d1d9229449fd3a826d034317d7a85d28bc8ba17dfa"
    },
    "org_profile": {
      "version": "0.0.71",
      "tag": "v0.0.71-antimatterium-org-profile-control-v0262-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.71-antimatterium-org-profile-control-v0262-backlink",
      "main_sha": "912cb148aac876584773fa0667d5b25cf8fcce65",
      "backlink_id": "cb7c72f27964e0a105c0433f803a4422e5b966f55b5ad716679b94757d4b1637"
    }
  },
  "closure": {
    "move129_surface_backlinks_bound": true,
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
  "closure_id": "94889ea04b57855f99f8cff464dc287b3ca518a9f0d38732dd3adc7e26040c05"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE130_CHECK_FAILED ' +
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
  'move129_surface_backlinks_bound',
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
    'MOVE130_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE130_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE129_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0262_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0277_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0173_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0071_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE130_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
