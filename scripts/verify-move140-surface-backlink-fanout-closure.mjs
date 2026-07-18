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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE140_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.68",
    "tag": "v0.2.68-antimatterium-control-move139-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.68-antimatterium-control-move139-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.67",
    "control_tag": "v0.2.67-antimatterium-control-move137-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.67-antimatterium-control-move137-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29653800567",
    "main_sha": "3eaa90d7b8850687431a47a5c8419f4bca6bfb0c",
    "closure_id": "fbc4bbb9a4f22f09657e0a5e9c9e1c6061e8640272e6c87dfc6b20933f3014a1"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.82",
      "tag": "v0.2.82-antimatterium-control-v0267-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.82-antimatterium-control-v0267-backlink",
      "main_sha": "7589b01207d2a47e3532d75b4373341ac6da35db",
      "backlink_id": "4b0bdeb6a230cb69473ecc11380bb36637ea29973d8b67a38105ac6ce8659097"
    },
    "www": {
      "version": "0.1.78",
      "tag": "v0.1.78-antimatterium-www-control-v0267-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.78-antimatterium-www-control-v0267-backlink",
      "main_sha": "5d115d4a240a2fa6f1b2dfeb35cbf8ded7ab38e7",
      "backlink_id": "6b4605f0bfd7f9b1ced08a94670008a5b9df8874b29f93abbe349b1cd1e5d925"
    },
    "org_profile": {
      "version": "0.0.76",
      "tag": "v0.0.76-antimatterium-org-profile-control-v0267-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.76-antimatterium-org-profile-control-v0267-backlink",
      "main_sha": "d2435f312179e72fa1595a8f807a55f33b0f6232",
      "backlink_id": "3432e12dfa7a4c8eacfab57bbcc72fa8f3f085b0a8008472d75e1578d743d218"
    }
  },
  "closure": {
    "move139_surface_backlinks_bound": true,
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
  "closure_id": "d952f0926fbb5036879e354b301b8a17a77bb1088a133be7494590ad69de2b1e"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE140_CHECK_FAILED ' +
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
  'move139_surface_backlinks_bound',
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
    'MOVE140_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE140_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE139_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0267_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0282_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0178_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0076_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE140_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
