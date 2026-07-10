#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 98);
assert.equal(receipt.closes, "Move 97 public surface backlink fanout");

assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.version, "0.2.47");
assert.equal(receipt.control.release_tag, "v0.2.47-antimatterium-control-move97-surface-closure");
assert.equal(receipt.control.source_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.46-antimatterium-control-move95-surface-closure");
assert.equal(receipt.control.source_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121293151");
assert.equal(receipt.control.source_closure_id, "1ddee463650c95cccec7babc8bae95f389c5f75880fc9aeb40a32a7f29b4d33d");
assert.equal(receipt.control.source_main_sha, "138c6d4497a0be4a493452bdd7b4ecf7098f6356");

const required = new Map([
  ["core", {
    package: "@antimatterium/antimatterium",
    version: "0.2.61",
    release: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.61-antimatterium-control-v0246-backlink",
    tag: "v0.2.61-antimatterium-control-v0246-backlink",
    backlink_id: "df8df22c35ef57a793cdb57033d05ebc2c0ba9abd3b072fd6bed6520d2421b6c"
  }],
  ["www", {
    package: "@antimatterium/www",
    version: "0.1.57",
    release: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.57-antimatterium-www-control-v0246-backlink",
    tag: "v0.1.57-antimatterium-www-control-v0246-backlink",
    backlink_id: "7ae73e20982f4964076c7ac8394c534451da0701d8f9ce35c6148d2d6857c392"
  }],
  ["org-profile", {
    package: "@antimatterium/org-profile",
    version: "0.0.55",
    release: "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.55-antimatterium-org-profile-control-v0246-backlink",
    tag: "v0.0.55-antimatterium-org-profile-control-v0246-backlink",
    backlink_id: "ff1268359260e2e4e336eb5f26f861bd83446179b9ab68a8c5134ce37d3e27ce"
  }]
]);

assert.equal(receipt.fanout.length, 3);
for (const entry of receipt.fanout) {
  const expected = required.get(entry.surface);
  assert.ok(expected, "unexpected surface " + entry.surface);
  assert.deepEqual({
    package: entry.package,
    version: entry.version,
    release: entry.release,
    tag: entry.tag,
    backlink_id: entry.backlink_id
  }, expected);
}

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

assert.equal(receipt.closure.kind, "move98_control_public_surface_backlink_fanout_closure");
assert.equal(receipt.closure.release_tag, "v0.2.47-antimatterium-control-move97-surface-closure");
assert.equal(receipt.closure.receipt_path, receiptPath);
assert.equal(receipt.closure.verifier, "scripts/verify-move98-surface-backlink-fanout-closure.mjs");
assert.equal(receipt.closure.audit, "scripts/move98-surface-backlink-fanout-closure-audit.sh");
assert.equal(receipt.closure.test, "tests/move98-surface-backlink-fanout-closure.test.mjs");

const { closure, ...canonical } = receipt;
const expectedId = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(closure.id, expectedId);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE97_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0246_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0261_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0157_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0055_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("MOVE98_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
