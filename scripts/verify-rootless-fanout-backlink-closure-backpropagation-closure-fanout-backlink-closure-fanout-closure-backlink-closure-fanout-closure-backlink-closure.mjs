import fs from "node:fs";
import crypto from "node:crypto";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function stable(value) {
  if (Array.isArray(value)) return "[" + value.map(stable).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => JSON.stringify(key) + ":" + stable(value[key])).join(",") + "}";
  }
  return JSON.stringify(value);
}

const receipt = JSON.parse(fs.readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(receipt.schema === "antimatterium.control.surface_backlink_fanout_closure.v1", "schema mismatch");
assert(receipt.package.name === "@antimatterium/control", "package name mismatch");
assert(receipt.package.version === "0.2.12", "receipt package version mismatch");
assert(pkg.version === "0.2.12", "package version mismatch");
assert(receipt.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure", "closure mismatch");
assert(receipt.prior_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.11-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure", "prior control release mismatch");
assert(receipt.prior_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28475228834", "prior control ci run mismatch");
assert(receipt.prior_control.closure_id === "58b6405492f8994415207a64b4a6051d7970996d601d3a5a7639033ee323fd8b", "prior control id mismatch");
assert(receipt.surface_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.26-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink", "core release mismatch");
assert(receipt.surface_backlinks.core.backlink_id === "c6d3ad0d2cac39a49bda98037b94096c06265da10bd544f8076853e08efb5ede", "core backlink id mismatch");
assert(receipt.surface_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.22-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink", "www release mismatch");
assert(receipt.surface_backlinks.www.backlink_id === "8c1ad7efafec8115f3ab1c97a4579398ed51aa9730aebe49fb49be2f4616acb7", "www backlink id mismatch");
assert(receipt.surface_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.20-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink", "org profile release mismatch");
assert(receipt.surface_backlinks.org_profile.backlink_id === "b7905c70228c3b58097e011921cb41446be96b226d05913d3bb29f92b74b65b7", "org profile backlink id mismatch");
assert(receipt.status === "PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSED", "status mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");

const unsigned = JSON.parse(JSON.stringify(receipt));
delete unsigned.closure_id;
const expected = crypto.createHash("sha256").update(stable(unsigned)).digest("hex");
assert(receipt.closure_id === expected, "closure id mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V0211_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0226_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0122_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0020_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_ID=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
