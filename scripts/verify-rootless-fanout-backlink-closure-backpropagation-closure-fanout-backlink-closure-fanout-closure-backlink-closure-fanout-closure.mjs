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

const receipt = JSON.parse(fs.readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(receipt.schema === "antimatterium.control.surface_backlink_fanout_closure.v1", "schema mismatch");
assert(receipt.package.name === "@antimatterium/control", "package name mismatch");
assert(receipt.package.version === "0.2.11", "receipt package version mismatch");
assert(["0.2.11", "0.2.12", "0.2.13"].includes(pkg.version), "package version mismatch");
assert(receipt.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure", "closure mismatch");
assert(receipt.prior_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.10-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure", "prior control release mismatch");
assert(receipt.prior_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28336116773", "prior control ci run mismatch");
assert(receipt.prior_control.closure_id === "12940aa22c1477af9f4748f928b94eaaecb7e1379717997504c66b6975d19baf", "prior control id mismatch");
assert(receipt.surface_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.25-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink", "core release mismatch");
assert(receipt.surface_backlinks.core.backlink_id === "4c015cd8bc31bd51c0aa4f6b6101a4827e1ebca2e2820a2ce4d3bb2564fd23f0", "core backlink id mismatch");
assert(receipt.surface_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.21-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink", "www release mismatch");
assert(receipt.surface_backlinks.www.backlink_id === "69cc72095fcf1196d839efb2ab5fea265b36e7a37b03b939e6c68f99f0d5d036", "www backlink id mismatch");
assert(receipt.surface_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.19-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink", "org profile release mismatch");
assert(receipt.surface_backlinks.org_profile.backlink_id === "a101d4e79a47a2486ec4fcf663a1c1a6220e2e609bd2989e0febe2ddcaf877a3", "org profile backlink id mismatch");
assert(receipt.status === "PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSED", "status mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");

const unsigned = JSON.parse(JSON.stringify(receipt));
delete unsigned.closure_id;
const expected = crypto.createHash("sha256").update(stable(unsigned)).digest("hex");
assert(receipt.closure_id === expected, "closure id mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V0210_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0225_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0121_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0019_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_ID=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
