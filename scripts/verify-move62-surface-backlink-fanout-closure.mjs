import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("CONTROL closes Move 61 public surface backlink fanout", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.control_surface_backlink_fanout_closure_receipt.v1");
  assert.equal(receipt.move, 62);
  assert.equal(receipt.control_version, "0.2.29");
  assert.equal(receipt.control_public_tag, "v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.prior_control.version, "0.2.28");
  assert.equal(receipt.prior_control.public_tag, "v0.2.28-antimatterium-control-move59-surface-closure");
  assert.equal(receipt.prior_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.28-antimatterium-control-move59-surface-closure");
  assert.equal(receipt.prior_control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706320665");
  assert.equal(receipt.prior_control.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(receipt.surface_backlinks.core.version, "0.2.43");
  assert.equal(receipt.surface_backlinks.core.public_tag, "v0.2.43-antimatterium-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.core.release, "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.43-antimatterium-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.core.backlink_id, "d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f");
  assert.equal(receipt.surface_backlinks.www.version, "0.1.39");
  assert.equal(receipt.surface_backlinks.www.public_tag, "v0.1.39-antimatterium-www-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.www.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.39-antimatterium-www-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.www.backlink_id, "7cf006f082445cc6ad6d76b0c3d091b156e89c40022423c76bf5863168ff3a44");
  assert.equal(receipt.surface_backlinks.org_profile.version, "0.0.37");
  assert.equal(receipt.surface_backlinks.org_profile.public_tag, "v0.0.37-antimatterium-org-profile-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.release, "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.37-antimatterium-org-profile-control-v0228-backlink");
  assert.equal(receipt.surface_backlinks.org_profile.backlink_id, "2c351b5159bd5bcd1f5d3180ef51ec1ae06457978690061755729c748337bbe8");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { closure_id, ...payload } = receipt;
  assert.equal(closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(canonicalHash(payload), "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  console.log("ANTIMATTERIUM_CONTROL_MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_MOVE61_SURFACE_BACKLINKS_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_V0228_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_V0243_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_V0139_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_V0037_BOUND=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE_ID=" + closure_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
