import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 53 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 54);
  assert.equal(receipt.control_version, "0.2.25");
  assert.equal(receipt.control_public_tag, "v0.2.25-antimatterium-control-move53-surface-closure");

  assert.equal(receipt.prior_control.version, "0.2.24");
  assert.equal(receipt.prior_control.public_tag, "v0.2.24-antimatterium-control-move51-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.24-antimatterium-control-move51-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28678642573");
  assert.equal(receipt.prior_control.closure_id, "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");

  assert.equal(receipt.surface_backlinks.core.version, "0.2.39");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.39-antimatterium-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.39-antimatterium-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "2510ae9ac118d45670c24263996408bb68f8a319cc46ec868a72cef24a78c7d7");

  assert.equal(receipt.surface_backlinks.www.version, "0.1.35");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.35-antimatterium-www-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.35-antimatterium-www-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "aa66fcbfc52271292c9f0c42759bc545add393d47ffbfa9147f8f0c4ab911774");

  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.33");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.33-antimatterium-org-profile-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.33-antimatterium-org-profile-control-v0224-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "e587609ef1185666dd0074a06f877582ab7df86cd2a4daa3444184b4e647ed91");

  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);

  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08");
  assert.equal(canonicalHash(payload), "99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08");

  console.log("ANTIMATTERIUM_CONTROL_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE53_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0224_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0239_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0135_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0033_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
