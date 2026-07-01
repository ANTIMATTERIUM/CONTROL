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

function digest(value) {
  return crypto.createHash("sha256").update(stable(value)).digest("hex");
}

const receiptPath = new URL("../control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE.json", import.meta.url);
const packagePath = new URL("../package.json", import.meta.url);

const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

const expected = receipt.closure_id;
const unsigned = { ...receipt };
delete unsigned.closure_id;

assert(receipt.schema === "antimatterium.control.surface_fanout_closure.v1", "schema mismatch");
assert(receipt.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure", "closure mismatch");
assert(receipt.control_version === "0.2.10", "control version mismatch");
assert(receipt.prior_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.9-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure", "prior CONTROL release mismatch");
assert(receipt.prior_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28335270892", "prior CONTROL CI mismatch");
assert(receipt.prior_control.closure_id === "570726c66a7f54f3e015ff8d4f09860036957d41c788e3cea8be16ff81d76f44", "prior CONTROL closure id mismatch");
assert(receipt.surfaces.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.24-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink", "Core release mismatch");
assert(receipt.surfaces.core.backlink_id === "6c84c858ce7a8fc4c70d7219b012cf51c612db32a63da6ec86696cdcd9db97ce", "Core backlink id mismatch");
assert(receipt.surfaces.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.20-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink", "WWW release mismatch");
assert(receipt.surfaces.www.backlink_id === "c7faa5c43b753515079569c63dba8393380c4c516e551ba8876999d4ca44aadc", "WWW backlink id mismatch");
assert(receipt.surfaces.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.18-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink", "org profile release mismatch");
assert(receipt.surfaces.org_profile.backlink_id === "6705f290297203d104262c41d84ec2c375a1f70a7514883fa0a00717031dcda7", "org profile backlink id mismatch");
assert(receipt.package.name === "@antimatterium/control", "package name mismatch");
assert(receipt.package.version === "0.2.10", "receipt package version mismatch");
assert(["0.2.10", "0.2.11", "0.2.12", "0.2.13", "0.2.14", "0.2.15"].includes(pkg.version), "package version mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");
assert(digest(unsigned) === expected, "closure digest mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V029_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0224_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0120_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0018_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_ID=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
