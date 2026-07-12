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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE126_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.61",
    "tag": "v0.2.61-antimatterium-control-move125-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.61-antimatterium-control-move125-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.60",
    "control_tag": "v0.2.60-antimatterium-control-move123-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.60-antimatterium-control-move123-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29204880416",
    "main_sha": "2ce460cd816eb4157dc2e65b1af233e33df07410",
    "closure_id": "236db452d82fe9fa222877afda4987e13583504e87a044860477476caffb771d"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.75",
      "tag": "v0.2.75-antimatterium-control-v0260-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.75-antimatterium-control-v0260-backlink",
      "main_sha": "73c4145223b82c2c0d5f932bfd0b3e22aa9bf5f0",
      "backlink_id": "9afef3a6e10a08e141d3aecac8b7c768aea51515eb169cd636ff644f599dd7cd"
    },
    "www": {
      "version": "0.1.71",
      "tag": "v0.1.71-antimatterium-www-control-v0260-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.71-antimatterium-www-control-v0260-backlink",
      "main_sha": "1e4e49f0c87653393f40ebfb0a90542c80b57dce",
      "backlink_id": "1215dab83a25a55d79b413db3f390845f888908110453a39e1845749f6534b22"
    },
    "org_profile": {
      "version": "0.0.69",
      "tag": "v0.0.69-antimatterium-org-profile-control-v0260-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.69-antimatterium-org-profile-control-v0260-backlink",
      "main_sha": "ae374bf879b2711f43d4a8f746da6fe75685ae93",
      "backlink_id": "33cb07465e2c96fb9227e20e9a3cd73c7e101ac2da3ca5011aa823121dfbaa5d"
    }
  },
  "closure": {
    "move125_surface_backlinks_bound": true,
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
  "closure_id": "9d1a849ced65fff3f4df4794c906575976131659581bdbbeb9d051b554513e45"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE126_CHECK_FAILED ' +
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
  'move125_surface_backlinks_bound',
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
    'MOVE126_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE126_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE125_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0260_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0275_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0171_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0069_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE126_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
