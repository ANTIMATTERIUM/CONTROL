#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE");
assert.equal(receipt.move, 96);
assert.equal(receipt.closes, "Move 95 public surface backlink fanout");

assert.equal(receipt.control.version, "0.2.46");
assert.equal(receipt.control.package, "@antimatterium/control");
assert.equal(receipt.control.source_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.45-antimatterium-control-move93-surface-closure");
assert.equal(receipt.control.source_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29114333184");
assert.equal(receipt.control.source_closure_id, "a233a9b9a989b021c008843e9a9947af74a27127debb13cd6539cc284cc23b03");

const required = new Map([
  ["core", {
    package: "@antimatterium/antimatterium",
    version: "0.2.60",
    release: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.60-antimatterium-control-v0245-backlink",
    backlink_id: "ef3d3629b0369f26be44e5b7b833baa9a8e7a85194f9a689def40e1298428e1f"
  }],
  ["www", {
    package: "@antimatterium/www",
    version: "0.1.56",
    release: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.56-antimatterium-www-control-v0245-backlink",
    backlink_id: "366e451002d513247e641b6a90b4fc6d3b987f296f756a740565a7801723905a"
  }],
  ["org-profile", {
    package: "@antimatterium/org-profile",
    version: "0.0.54",
    release: "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.54-antimatterium-org-profile-control-v0245-backlink",
    backlink_id: "34878b717c3ccdd246a25eb829c85a87ac66af56ad23ef507aa961e7c7b94848"
  }]
]);

assert.equal(receipt.fanout.length, 3);
for (const entry of receipt.fanout) {
  const expected = required.get(entry.surface);
  assert.ok(expected, `unexpected surface ${entry.surface}`);
  assert.deepEqual(
    {
      package: entry.package,
      version: entry.version,
      release: entry.release,
      backlink_id: entry.backlink_id
    },
    expected
  );
}

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

assert.equal(receipt.closure.release_tag, "v0.2.46-antimatterium-control-move95-surface-closure");
assert.equal(receipt.closure.receipt_path, receiptPath);
assert.equal(receipt.closure.verifier, "scripts/verify-move96-surface-backlink-fanout-closure.mjs");
assert.equal(receipt.closure.audit, "scripts/move96-surface-backlink-fanout-closure-audit.sh");
assert.equal(receipt.closure.test, "tests/move96-surface-backlink-fanout-closure.test.mjs");

const canonical = {
  protocol: receipt.protocol,
  move: receipt.move,
  closes: receipt.closes,
  control: receipt.control,
  fanout: receipt.fanout,
  constraints: receipt.constraints
};

const expectedId = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(receipt.closure.id, expectedId);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
assert.equal(serialized.includes(localUserRootToken), false);
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_CONTROL_MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_MOVE95_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V0245_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0260_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0156_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0054_BOUND=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(`MOVE96_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=${receipt.closure.id}`);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
