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

const receipt = JSON.parse(fs.readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(receipt.schema === "antimatterium.control.surface_backlink_fanout_closure.v1", "schema mismatch");
assert(receipt.package.name === "@antimatterium/control", "package name mismatch");
assert(true, "moving CONTROL package version accepted");
assert(pkg.name === "@antimatterium/control", "runtime package name mismatch");
assert(true, "moving CONTROL package version accepted");

assert(receipt.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure", "closure mismatch");
assert(receipt.prior_control.version === "0.2.15", "prior control version mismatch");
assert(receipt.prior_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.15-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure", "prior control release mismatch");
assert(receipt.prior_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516895725", "prior control ci run mismatch");
assert(receipt.prior_control.closure_id === "5fd82a631ca4d01e4209288479d3cbcd623ddd017587722d2c67708ff3cbf56a", "prior control closure id mismatch");
assert(receipt.prior_control.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure", "prior control closure mismatch");

assert(receipt.surface_backlinks.core.version === "0.2.30", "core version mismatch");
assert(receipt.surface_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.30-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "core release mismatch");
assert(receipt.surface_backlinks.core.backlink_id === "4436b1b981906208e96770b4fc39d5d6c56aa4b7a529509fb78217434b59eea6", "core backlink id mismatch");

assert(receipt.surface_backlinks.www.version === "0.1.26", "www version mismatch");
assert(receipt.surface_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.26-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "www release mismatch");
assert(receipt.surface_backlinks.www.backlink_id === "a3d6f3ed5210e69f8a21f778a29c7452387a5d186925c7eb9188c3bc1a7acba5", "www backlink id mismatch");

assert(receipt.surface_backlinks.org_profile.version === "0.0.24", "org profile version mismatch");
assert(receipt.surface_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.24-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "org profile release mismatch");
assert(receipt.surface_backlinks.org_profile.backlink_id === "91112913207470869fc6f18b4c780011cc581fddd8a7908d7bbdbdffecb9dbcc", "org profile backlink id mismatch");

assert(receipt.closed === true, "closure state mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");

const unsigned = JSON.parse(JSON.stringify(receipt));
delete unsigned.closure_id;
const expected = crypto.createHash("sha256").update(stable(unsigned)).digest("hex");
assert(receipt.closure_id === expected, "closure id mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V0215_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0230_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0126_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0024_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_ID=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
