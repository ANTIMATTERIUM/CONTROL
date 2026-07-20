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

function sha256File(file) {
  return crypto
    .createHash('sha256')
    .update(fs.readFileSync(file))
    .digest('hex');
}

function check(path, actual, expected) {
  if (actual !== expected) {
    fail(
      `MOVE144_CHECK_FAILED ${path}: expected ` +
      `${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
    );
  }
}

const receiptPath =
  'control/ANTIMATTERIUM_CONTROL_MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE.json';
const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));
const affectedMoves = [126, 128, 130, 132, 134, 136, 138, 140, 142];

const expected = {
  schema:
    'antimatterium.control_surface_backlink_fanout_closure_ontology_correction.v1',
  move: 144,
  package: {
    name: '@antimatterium/control',
    version: '0.2.70',
    tag: 'v0.2.70-antimatterium-control-move143-surface-closure',
    release:
      'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.70-antimatterium-control-move143-surface-closure'
  },
  source_authority: {
    control_version: '0.2.69',
    control_tag:
      'v0.2.69-antimatterium-control-move141-surface-closure',
    control_release:
      'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.69-antimatterium-control-move141-surface-closure',
    verify_ci_run:
      'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29655274264',
    main_sha: 'e78622f490ae36a2b2c4bb672191d5c4d2b90659',
    closure_id:
      '63c59d3b79e4d34cec2f33f72fc898aba3e8a1311f664f62b247107054b2b31d',
    evidence_status: 'historical_authority_with_known_ordinal_drift'
  },
  surface_fanout: {
    core: {
      version: '0.2.84',
      tag: 'v0.2.84-antimatterium-control-v0269-backlink',
      release:
        'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.84-antimatterium-control-v0269-backlink',
      main_sha: '1db9e83f7f8448a362e2f985f48f8be4d0657a95',
      backlink_id:
        '3e61d04f6514637200f25fc2386185996173a3431f16e78e841fbf03bd383c14'
    },
    www: {
      version: '0.1.80',
      tag: 'v0.1.80-antimatterium-www-control-v0269-backlink',
      release:
        'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.80-antimatterium-www-control-v0269-backlink',
      main_sha: 'dbd2b99da519afde09e23e27b66e0a53a6165c40',
      backlink_id:
        'd2dee8f8f445b6027e2d789fb3139501ea720074814e09bf348da4f65abbd313'
    },
    org_profile: {
      version: '0.0.78',
      tag:
        'v0.0.78-antimatterium-org-profile-control-v0269-backlink',
      release:
        'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.78-antimatterium-org-profile-control-v0269-backlink',
      main_sha: '6deb49a150c54ad90379673d80b046f3acb7d974',
      backlink_id:
        '7422db968eac4d1dda7cea72a3985581ef28aa8ece97c66f0cf5306183a66b1e'
    }
  }
};

check('schema', receipt.schema, expected.schema);
check('move', receipt.move, 144);

for (const key of ['name', 'version', 'tag', 'release']) {
  check(`package.${key}`, receipt.package?.[key], expected.package[key]);
}

for (const key of [
  'control_version',
  'control_tag',
  'control_release',
  'verify_ci_run',
  'main_sha',
  'closure_id',
  'evidence_status'
]) {
  check(
    `source_authority.${key}`,
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
      `surface_fanout.${surface}.${key}`,
      receipt.surface_fanout?.[surface]?.[key],
      expected.surface_fanout[surface][key]
    );
  }
}

check(
  'ontology_correction.type',
  receipt.ontology_correction?.type,
  'additive_supersession'
);
check(
  'ontology_correction.defect',
  receipt.ontology_correction?.defect,
  'inherited_move_ordinal_124'
);
check(
  'ontology_correction.affected_moves',
  stable(receipt.ontology_correction?.affected_moves),
  stable(affectedMoves)
);
check(
  'ontology_correction.legacy_declared_move',
  receipt.ontology_correction?.legacy_declared_move,
  124
);
check(
  'ontology_correction.corrected_current_move',
  receipt.ontology_correction?.corrected_current_move,
  144
);

for (const key of [
  'legacy_receipts_preserved',
  'legacy_verifiers_preserved',
  'historical_tags_immutable',
  'supersedes_ordinal_semantics_only',
  'release_bindings_remain_authoritative'
]) {
  check(
    `ontology_correction.${key}`,
    receipt.ontology_correction?.[key],
    true
  );
}

const actualEvidence = affectedMoves.map(filenameMove => {
  const legacyReceiptPath =
    `control/ANTIMATTERIUM_CONTROL_MOVE${filenameMove}_SURFACE_BACKLINK_FANOUT_CLOSURE.json`;
  const verifierPath =
    `scripts/verify-move${filenameMove}-surface-backlink-fanout-closure.mjs`;

  if (!fs.existsSync(legacyReceiptPath) || !fs.existsSync(verifierPath)) {
    fail(`MOVE144_LEGACY_EVIDENCE_FILE_MISSING move=${filenameMove}`);
  }

  const legacyReceipt = JSON.parse(
    fs.readFileSync(legacyReceiptPath, 'utf8')
  );
  const verifierText = fs.readFileSync(verifierPath, 'utf8');
  const verifierObjectMove = Number(
    verifierText.match(/["']move["']\s*:\s*(\d+)/)?.[1]
  );
  const verifierCheckMove = Number(
    verifierText.match(
      /check\(\s*["']move["']\s*,\s*receipt\.move\s*,\s*(\d+)\s*\)/
    )?.[1]
  );

  if (
    legacyReceipt.move !== 124 ||
    verifierObjectMove !== 124 ||
    verifierCheckMove !== 124
  ) {
    fail(`MOVE144_LEGACY_DRIFT_NOT_PRESERVED move=${filenameMove}`);
  }

  if (!/^[a-f0-9]{64}$/.test(legacyReceipt.closure_id || '')) {
    fail(`MOVE144_LEGACY_CLOSURE_ID_INVALID move=${filenameMove}`);
  }

  return {
    filename_move: filenameMove,
    declared_move: legacyReceipt.move,
    verifier_object_move: verifierObjectMove,
    verifier_check_move: verifierCheckMove,
    package_version: legacyReceipt.package?.version,
    package_tag: legacyReceipt.package?.tag,
    closure_id: legacyReceipt.closure_id,
    receipt_path: legacyReceiptPath,
    verifier_path: verifierPath,
    receipt_sha256: sha256File(legacyReceiptPath),
    verifier_sha256: sha256File(verifierPath)
  };
});

check(
  'ontology_correction.evidence',
  stable(receipt.ontology_correction?.evidence),
  stable(actualEvidence)
);

const observedDrift = [];

for (const name of fs.readdirSync('control')) {
  const match = name.match(
    /^ANTIMATTERIUM_CONTROL_MOVE(\d+)_SURFACE_BACKLINK_FANOUT_CLOSURE\.json$/
  );

  if (!match) continue;

  const filenameMove = Number(match[1]);
  if (filenameMove < 124 || filenameMove > 142) continue;

  const historicalReceiptPath = `control/${name}`;
  const historicalVerifierPath =
    `scripts/verify-move${filenameMove}-surface-backlink-fanout-closure.mjs`;

  if (!fs.existsSync(historicalVerifierPath)) {
    fail(`MOVE144_ORDINAL_SCAN_VERIFIER_MISSING move=${filenameMove}`);
  }

  const historicalReceipt = JSON.parse(
    fs.readFileSync(historicalReceiptPath, 'utf8')
  );
  const historicalVerifier = fs.readFileSync(
    historicalVerifierPath,
    'utf8'
  );
  const objectMove = Number(
    historicalVerifier.match(/["']move["']\s*:\s*(\d+)/)?.[1]
  );
  const literalCheckMatch = historicalVerifier.match(
    /check\(\s*["']move["']\s*,\s*receipt\.move\s*,\s*(\d+)\s*\)/
  );
  const checkMove = literalCheckMatch
    ? Number(literalCheckMatch[1])
    : filenameMove === 144
      ? 144
      : Number.NaN;

  const correct =
    historicalReceipt.move === filenameMove &&
    objectMove === filenameMove &&
    checkMove === filenameMove;

  if (!correct) observedDrift.push(filenameMove);
}

check(
  'ontology_correction.observed_drift',
  stable(observedDrift),
  stable(affectedMoves)
);

for (const key of [
  'move143_surface_backlinks_bound',
  'exact_public_tag_commits_required',
  'external_replay_required',
  'short_public_tag_required',
  'no_local_root_required',
  'ordinal_ontology_corrected'
]) {
  check(`closure.${key}`, receipt.closure?.[key], true);
}

for (const key of [
  'no_current_production_claim',
  'no_starship_claim',
  'no_physical_production_instructions'
]) {
  check(`safety.${key}`, receipt.safety?.[key], true);
}

if (!/^[a-f0-9]{64}$/.test(receipt.closure_id || '')) {
  fail('MOVE144_CLOSURE_ID_FORMAT_INVALID');
}

const canonical = JSON.parse(JSON.stringify(receipt));
delete canonical.closure_id;

const recomputed = crypto
  .createHash('sha256')
  .update(stable(canonical))
  .digest('hex');

if (recomputed !== receipt.closure_id) {
  fail(
    `MOVE144_CLOSURE_ID_RECOMPUTE_FAILED expected ` +
    `${receipt.closure_id}, got ${recomputed}`
  );
}

console.log(
  'ANTIMATTERIUM_CONTROL_MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true'
);
console.log('ANTIMATTERIUM_MOVE143_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_MOVE144_ORDINAL_ONTOLOGY_CORRECTION_BOUND=true');
console.log('ANTIMATTERIUM_MOVE144_ADDITIVE_SUPERSESSION=true');
console.log('ANTIMATTERIUM_MOVE126_TO_MOVE142_LEGACY_EVIDENCE_PRESERVED=true');
console.log('ANTIMATTERIUM_CONTROL_V0269_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0284_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0180_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0078_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(`MOVE144_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=${receipt.closure_id}`);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
