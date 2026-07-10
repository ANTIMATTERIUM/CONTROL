#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const expected = {
  "protocol": "ANTIMATTERIUM_CONTROL_MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE",
  "move": 100,
  "control": {
    "package": "@antimatterium/control",
    "version": "0.2.48",
    "closure_kind": "move99_public_surface_backlink_fanout_closure",
    "receipt_path": "control/ANTIMATTERIUM_CONTROL_MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE.json",
    "verifier": "scripts/verify-move100-surface-backlink-fanout-closure.mjs",
    "audit": "scripts/move100-surface-backlink-fanout-closure-audit.sh",
    "test": "tests/move100-surface-backlink-fanout-closure.test.mjs"
  },
  "source_control": {
    "package": "@antimatterium/control",
    "version": "0.2.47",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.47-antimatterium-control-move97-surface-closure",
    "release_tag": "v0.2.47-antimatterium-control-move97-surface-closure",
    "ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121927208",
    "closure_id": "d0d96d476693d7cc05e1a2c6f4467afaeae1711d5dd426944f78cd0e60789874",
    "main_sha": "c50f5844d8e4bfc54c63481e7ec46ad586788c4b"
  },
  "move99_surface_backlinks": {
    "core": {
      "package": "@antimatterium/antimatterium",
      "version": "0.2.62",
      "release": "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.62-antimatterium-control-v0247-backlink",
      "release_tag": "v0.2.62-antimatterium-control-v0247-backlink",
      "backlink_id": "a6e585ae0c31cf7ebe2a301bec2eba5b1b39a85bbddcf8c5c8f478dcb77138d2"
    },
    "www": {
      "package": "@antimatterium/www",
      "version": "0.1.58",
      "release": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.58-antimatterium-www-control-v0247-backlink",
      "release_tag": "v0.1.58-antimatterium-www-control-v0247-backlink",
      "backlink_id": "6be0be82cdfecec6a319604688180db339e64fcb1ea873f030e1efca0db0194f"
    },
    "org_profile": {
      "package": "@antimatterium/org-profile",
      "version": "0.0.56",
      "release": "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.56-antimatterium-org-profile-control-v0247-backlink",
      "release_tag": "v0.0.56-antimatterium-org-profile-control-v0247-backlink",
      "backlink_id": "3aa39959e3a7b7e4d53ba8eae3d164d22532de1a892e8a5d28705476170d61b1"
    }
  },
  "constraints": {
    "short_public_tag_required": true,
    "no_local_root_required": true,
    "no_current_production_claim": true,
    "no_starship_claim": true,
    "no_physical_production_instructions": true
  },
  "closureId": "5b65cc86664000ddedcd539e13ad893e6c88e8912f5785a0163c408bb1624132"
};
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, expected.protocol);
assert.equal(receipt.move, expected.move);
assert.deepEqual(receipt.control, expected.control);
assert.deepEqual(receipt.source_control, expected.source_control);
assert.deepEqual(receipt.move99_surface_backlinks, expected.move99_surface_backlinks);
assert.deepEqual(receipt.constraints, expected.constraints);
assert.equal(receipt.closure.kind, "move100_control_public_surface_backlink_fanout_closure");
assert.equal(receipt.closure.closed_move, 99);
assert.deepEqual(receipt.closure.closes, [
  expected.move99_surface_backlinks.core.release,
  expected.move99_surface_backlinks.www.release,
  expected.move99_surface_backlinks.org_profile.release
]);

const { closure, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure.id, computed);
assert.equal(closure.id, expected.closureId);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE99_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0247_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0262_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0158_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0056_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE100_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
