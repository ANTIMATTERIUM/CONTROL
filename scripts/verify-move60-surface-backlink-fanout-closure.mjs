import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 59 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 60);
  assert.equal(receipt.control_version, "0.2.28");
  assert.equal(receipt.control_public_tag, "v0.2.28-antimatterium-control-move59-surface-closure");
  assert.equal(receipt.prior_control.version, "0.2.27");
  assert.equal(receipt.prior_control.public_tag, "v0.2.27-antimatterium-control-move57-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.27-antimatterium-control-move57-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28705916342");
  assert.equal(receipt.prior_control.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(receipt.surface_backlinks.core.version, "0.2.42");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.42-antimatterium-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.42-antimatterium-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad");
  assert.equal(receipt.surface_backlinks.www.version, "0.1.38");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.38-antimatterium-www-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.38-antimatterium-www-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "3474233f57f492980f136b5e5d9df0946499cc64e09a06aa59c2283f3d7f816d");
  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.36");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.36-antimatterium-org-profile-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.36-antimatterium-org-profile-control-v0227-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "a0fcf65320c2a2ef628f148d07fa4a44b3904557323df877f240c15988a18428");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(canonicalHash(payload), "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  console.log("ANTIMATTERIUM_CONTROL_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE59_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0227_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0242_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0138_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0036_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
