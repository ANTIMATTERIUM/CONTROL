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
  fs.readFileSync("control/ANTIMATTERIUM_CONTROL_MOVE128_SURFACE_BACKLINK_FANOUT_CLOSURE.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.control_surface_backlink_fanout_closure.v1",
  "move": 124,
  "package": {
    "name": "@antimatterium/control",
    "version": "0.2.62",
    "tag": "v0.2.62-antimatterium-control-move127-surface-closure",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.62-antimatterium-control-move127-surface-closure"
  },
  "source_authority": {
    "control_version": "0.2.61",
    "control_tag": "v0.2.61-antimatterium-control-move125-surface-closure",
    "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.61-antimatterium-control-move125-surface-closure",
    "verify_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29205745933",
    "main_sha": "2e514a95c2fda3c46a63eab206b3a3dee2459f4b",
    "closure_id": "9d1a849ced65fff3f4df4794c906575976131659581bdbbeb9d051b554513e45"
  },
  "surface_fanout": {
    "core": {
      "version": "0.2.76",
      "tag": "v0.2.76-antimatterium-control-v0261-backlink",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.76-antimatterium-control-v0261-backlink",
      "main_sha": "77243ea4ce7b2e127216caef3f54e9ba49ed2179",
      "backlink_id": "3868c24230fb64df5e49eb7492becdfd5f3f68581b39a0bffc6507d013428ace"
    },
    "www": {
      "version": "0.1.72",
      "tag": "v0.1.72-antimatterium-www-control-v0261-backlink",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.72-antimatterium-www-control-v0261-backlink",
      "main_sha": "3c75b67621cc71e064b21376e32c2497360bd72f",
      "backlink_id": "59d02ae226be19af900f34c6e151032400c657c2f3a2cc46f714ef21f146df3b"
    },
    "org_profile": {
      "version": "0.0.70",
      "tag": "v0.0.70-antimatterium-org-profile-control-v0261-backlink",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.70-antimatterium-org-profile-control-v0261-backlink",
      "main_sha": "33eec3157db0eef6272864a177728a0368598df7",
      "backlink_id": "057af08838911166e0ab5261aadb4110d2402b0748ea8bb12aeb470ca1765e9f"
    }
  },
  "closure": {
    "move127_surface_backlinks_bound": true,
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
  "closure_id": "007e29815bc5e5ce89ab28897268ece2d61a503cc08b4add7a9a758249444edb"
};

function check(path, actual, wanted) {
  if (actual !== wanted) {
    fail(
      'MOVE128_CHECK_FAILED ' +
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
  'move127_surface_backlinks_bound',
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
    'MOVE128_CLOSURE_ID_RECOMPUTE_FAILED expected ' +
    receipt.closure_id +
    ', got ' +
    recomputed
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE128_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE127_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0261_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0276_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0172_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0070_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(
  'MOVE128_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' +
  receipt.closure_id
);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
