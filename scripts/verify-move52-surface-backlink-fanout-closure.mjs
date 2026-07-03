import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 51 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control.public_surface_backlink_fanout_closure.v1");
  assert.equal(receipt.move, 52);
  assert.equal(receipt.control_version, "0.2.24");
  assert.equal(receipt.control_public_tag, "v0.2.24-antimatterium-control-move51-surface-closure");

  assert.equal(receipt.prior_control.version, "0.2.23");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure");
  assert.equal(receipt.prior_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28641499317");
  assert.equal(receipt.prior_control.closure_id, "35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e");

  assert.equal(receipt.surfaces.core.version, "0.2.38");
  assert.equal(receipt.surfaces.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.38-antimatterium-control-v0223-backlink");
  assert.equal(receipt.surfaces.core.backlink_id, "dc1bbccf63ed9a2ac96a73478b81d86776ed9ac9241bb6a0cdadf2f9618d16fa");

  assert.equal(receipt.surfaces.www.version, "0.1.34");
  assert.equal(receipt.surfaces.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.34-antimatterium-www-control-v0223-backlink");
  assert.equal(receipt.surfaces.www.backlink_id, "99a1086a802c112208e85432c4de265de299595f2c5104ae86b5335d742cf50b");

  assert.equal(receipt.surfaces.org_profile.version, "0.0.32");
  assert.equal(receipt.surfaces.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.32-antimatterium-org-profile-control-v0223-backlink");
  assert.equal(receipt.surfaces.org_profile.backlink_id, "864c8239ea2c14446bbe81f14c89170ac8891134e12e593a47968073407af826");

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);

  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");
  assert.equal(canonicalHash(payload), "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");

  console.log("ANTIMATTERIUM_CONTROL_MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE51_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0223_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0238_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0134_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0032_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
