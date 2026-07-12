#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE120_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));

const stable = {
  "doctrine": "ANTIMATTERIUM_CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE",
  "move": 120,
  "closes_move": 119,
  "control_version": "0.2.58",
  "control_tag": "v0.2.58-antimatterium-control-move119-surface-closure",
  "source_control_version": "0.2.57",
  "source_control_tag": "v0.2.57-antimatterium-control-move117-surface-closure",
  "source_control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.57-antimatterium-control-move117-surface-closure",
  "source_control_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29197125059",
  "source_control_main_sha": "ad002077cc6d86bd03655ee8bec24df00f75d17d",
  "source_control_closure_id": "b9e403645fe18031552c192cd7ebed2c2d8e9aec070502c6d89b556aabfabf32",
  "core_release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.72-antimatterium-control-v0257-backlink",
  "www_release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.68-antimatterium-www-control-v0257-backlink",
  "org_profile_release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.66-antimatterium-org-profile-control-v0257-backlink",
  "core_tag": "v0.2.72-antimatterium-control-v0257-backlink",
  "www_tag": "v0.1.68-antimatterium-www-control-v0257-backlink",
  "org_profile_tag": "v0.0.66-antimatterium-org-profile-control-v0257-backlink",
  "core_backlink_id": "904813a62a468852f8a1e0fd05b3a34c2959ecc9c34ce7c6248bc2ccc18aea87",
  "www_backlink_id": "08488c1ef5ea6678e6c563669a73cea1a814b9d96bbc861a7fa4a045638419a8",
  "org_profile_backlink_id": "92c036edafcc6abe1827804f09e0926d86f8b3c907915b44510cbd52484f16c7",
  "short_public_tag_required": true,
  "no_local_root_required": true,
  "no_current_production_claim": true,
  "no_starship_claim": true,
  "no_physical_production_instructions": true
};
const expectedId = crypto.createHash('sha256')
  .update(JSON.stringify(stable))
  .digest('hex');

function assert(condition, message) {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

assert(receipt.move === 120, 'MOVE120_RECEIPT_MOVE_MISMATCH');
assert(receipt.closes_move === 119, 'MOVE120_CLOSES_MOVE_MISMATCH');
assert(receipt.control_version === "0.2.58", 'MOVE120_CONTROL_VERSION_MISMATCH');
assert(receipt.control_tag === "v0.2.58-antimatterium-control-move119-surface-closure", 'MOVE120_CONTROL_TAG_MISMATCH');
assert(receipt.source_control_version === "0.2.57", 'MOVE120_SOURCE_CONTROL_VERSION_MISMATCH');
assert(receipt.source_control_tag === "v0.2.57-antimatterium-control-move117-surface-closure", 'MOVE120_SOURCE_CONTROL_TAG_MISMATCH');
assert(receipt.source_control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.57-antimatterium-control-move117-surface-closure", 'MOVE120_SOURCE_CONTROL_RELEASE_MISMATCH');
assert(receipt.source_control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29197125059", 'MOVE120_SOURCE_CONTROL_CI_RUN_MISMATCH');
assert(receipt.source_control_main_sha === "ad002077cc6d86bd03655ee8bec24df00f75d17d", 'MOVE120_SOURCE_CONTROL_MAIN_SHA_MISMATCH');
assert(receipt.source_control_closure_id === "b9e403645fe18031552c192cd7ebed2c2d8e9aec070502c6d89b556aabfabf32", 'MOVE120_SOURCE_CONTROL_CLOSURE_ID_MISMATCH');

assert(receipt.core_release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.72-antimatterium-control-v0257-backlink", 'MOVE120_CORE_RELEASE_MISMATCH');
assert(receipt.www_release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.68-antimatterium-www-control-v0257-backlink", 'MOVE120_WWW_RELEASE_MISMATCH');
assert(receipt.org_profile_release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.66-antimatterium-org-profile-control-v0257-backlink", 'MOVE120_ORG_PROFILE_RELEASE_MISMATCH');

assert(receipt.core_tag === "v0.2.72-antimatterium-control-v0257-backlink", 'MOVE120_CORE_TAG_MISMATCH');
assert(receipt.www_tag === "v0.1.68-antimatterium-www-control-v0257-backlink", 'MOVE120_WWW_TAG_MISMATCH');
assert(receipt.org_profile_tag === "v0.0.66-antimatterium-org-profile-control-v0257-backlink", 'MOVE120_ORG_PROFILE_TAG_MISMATCH');

assert(receipt.core_backlink_id === "904813a62a468852f8a1e0fd05b3a34c2959ecc9c34ce7c6248bc2ccc18aea87", 'MOVE120_CORE_BACKLINK_ID_MISMATCH');
assert(receipt.www_backlink_id === "08488c1ef5ea6678e6c563669a73cea1a814b9d96bbc861a7fa4a045638419a8", 'MOVE120_WWW_BACKLINK_ID_MISMATCH');
assert(receipt.org_profile_backlink_id === "92c036edafcc6abe1827804f09e0926d86f8b3c907915b44510cbd52484f16c7", 'MOVE120_ORG_PROFILE_BACKLINK_ID_MISMATCH');

assert(receipt.closure_id === expectedId, 'MOVE120_CLOSURE_ID_MISMATCH');
assert(receipt.short_public_tag_required === true, 'MOVE120_SHORT_PUBLIC_TAG_REQUIRED_MISSING');
assert(receipt.no_local_root_required === true, 'MOVE120_NO_LOCAL_ROOT_REQUIRED_MISSING');
assert(receipt.no_current_production_claim === true, 'MOVE120_NO_CURRENT_PRODUCTION_CLAIM_MISSING');
assert(receipt.no_starship_claim === true, 'MOVE120_NO_STARSHIP_CLAIM_MISSING');
assert(receipt.no_physical_production_instructions === true, 'MOVE120_NO_PHYSICAL_PRODUCTION_INSTRUCTIONS_MISSING');

console.log('ANTIMATTERIUM_CONTROL_MOVE120_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_MOVE119_SURFACE_BACKLINKS_BOUND=true');
console.log('ANTIMATTERIUM_CONTROL_V0257_BOUND=true');
console.log('ANTIMATTERIUM_CORE_V0272_BOUND=true');
console.log('ANTIMATTERIUM_WWW_V0168_BOUND=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_V0066_BOUND=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('MOVE120_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=' + receipt.closure_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
