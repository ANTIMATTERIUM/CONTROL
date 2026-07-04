import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 63 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 64);
  assert.equal(receipt.control_version, "0.2.30");
  assert.equal(receipt.control_public_tag, "v0.2.30-antimatterium-control-move63-surface-closure");
  assert.equal(receipt.prior_control.version, "0.2.29");
  assert.equal(receipt.prior_control.public_tag, "v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706590644");
  assert.equal(receipt.prior_control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.surface_backlinks.core.version, "0.2.44");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.44-antimatterium-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.44-antimatterium-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7");
  assert.equal(receipt.surface_backlinks.www.version, "0.1.40");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.40-antimatterium-www-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.40-antimatterium-www-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "1f2c9df8075c89c6cfce4f8a807b52e313a6d8711631c934e193464e2291c2ae");
  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.38");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.38-antimatterium-org-profile-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.38-antimatterium-org-profile-control-v0229-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "f2119453983e2812b87c9b0821d8fd71ca728f8d1007039e83dd1fb5b20d51d4");
  assert.equal(receipt.closure_scope, "control_closes_move63_public_surface_backlink_fanout");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  assert.equal(canonicalHash(payload), "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  console.log("ANTIMATTERIUM_CONTROL_MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE63_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0229_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0244_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0140_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0038_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
