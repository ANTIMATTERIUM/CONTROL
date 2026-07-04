import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 55 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 56);
  assert.equal(receipt.control_version, "0.2.26");
  assert.equal(receipt.control_public_tag, "v0.2.26-antimatterium-control-move55-surface-closure");

  assert.equal(receipt.prior_control.version, "0.2.25");
  assert.equal(receipt.prior_control.public_tag, "v0.2.25-antimatterium-control-move53-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.25-antimatterium-control-move53-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28679307644");
  assert.equal(receipt.prior_control.closure_id, "99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08");

  assert.equal(receipt.surface_backlinks.core.version, "0.2.40");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.40-antimatterium-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.40-antimatterium-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "25300eab3d4e02042e2a78ddea6390e7eb6224ee05677d0de1ebe61f1fb66cd3");

  assert.equal(receipt.surface_backlinks.www.version, "0.1.36");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.36-antimatterium-www-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.36-antimatterium-www-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "3b97914ce9676d649d2157221c44a69b222a83d8a6071267f1fad5f29c499880");

  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.34");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.34-antimatterium-org-profile-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.34-antimatterium-org-profile-control-v0225-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "b11e8e8c9c1232e769c7f4ed358871c845732f7e3893af80b967864cf235ffe8");

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);

  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf");
  assert.equal(canonicalHash(payload), "8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf");

  console.log("ANTIMATTERIUM_CONTROL_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE55_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0225_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0240_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0136_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0034_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
