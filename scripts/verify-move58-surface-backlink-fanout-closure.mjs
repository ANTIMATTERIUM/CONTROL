import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 57 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 58);
  assert.equal(receipt.control_version, "0.2.27");
  assert.equal(receipt.control_public_tag, "v0.2.27-antimatterium-control-move57-surface-closure");
  assert.equal(receipt.prior_control.version, "0.2.26");
  assert.equal(receipt.prior_control.public_tag, "v0.2.26-antimatterium-control-move55-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.26-antimatterium-control-move55-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28704906669");
  assert.equal(receipt.prior_control.closure_id, "8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf");
  assert.equal(receipt.surface_backlinks.core.version, "0.2.41");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.41-antimatterium-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.41-antimatterium-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "2e0deb97724408f5b010420abca50ad4992c06027ba38178d6921db32de995dd");
  assert.equal(receipt.surface_backlinks.www.version, "0.1.37");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.37-antimatterium-www-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.37-antimatterium-www-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "61cdb8b8cba8cfdcd32dd0bca3db4083f8e2029fb6abf38aeb9d4d9de7e060ba");
  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.35");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.35-antimatterium-org-profile-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.35-antimatterium-org-profile-control-v0226-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "6579f853f01750b72f2471c53688a3f324d5c719a5b8d0045b501f3675619e67");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(canonicalHash(payload), "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  console.log("ANTIMATTERIUM_CONTROL_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE57_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0226_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0241_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0137_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0035_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
