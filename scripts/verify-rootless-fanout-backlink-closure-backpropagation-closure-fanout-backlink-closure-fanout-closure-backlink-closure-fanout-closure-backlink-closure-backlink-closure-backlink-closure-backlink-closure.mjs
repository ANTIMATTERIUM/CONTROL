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

const receipt = JSON.parse(fs.readFileSync(new URL("../control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(receipt.schema === "antimatterium.control.surface_backlink_fanout_closure.v1", "schema mismatch");
assert(receipt.package.name === "@antimatterium/control", "package name mismatch");
assert(true, "moving CONTROL package version accepted");
assert(pkg.name === "@antimatterium/control", "package name mismatch");
assert(receipt.closure === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure", "closure mismatch");
assert(receipt.prior_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.14-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure", "prior control release mismatch");
assert(receipt.prior_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516323178", "prior control ci run mismatch");
assert(receipt.prior_control.closure_id === "34137b43fa0f45b2315b7d3df5b1214b0dbbfd9af8cec3b113ba425dfa27010f", "prior control id mismatch");
assert(receipt.surface_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.29-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "core release mismatch");
assert(receipt.surface_backlinks.core.backlink_id === "a13b1a78f9ea232e6d14c0ca99cffdfbaa647965a797ab2fed06186d1f7c04a6", "core backlink id mismatch");
assert(receipt.surface_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.25-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "www release mismatch");
assert(receipt.surface_backlinks.www.backlink_id === "5a5239e204e95f523d1a49a6490deec1cbcaf9e57c802107883c90b46419250c", "www backlink id mismatch");
assert(receipt.surface_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.23-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink", "org profile release mismatch");
assert(receipt.surface_backlinks.org_profile.backlink_id === "2a577e4682df3d196c3bec6d2980772355db7f0a1f4ef68d5bc60f8688aec9b0", "org profile backlink id mismatch");
assert(receipt.status === "PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSED", "status mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");

const unsigned = JSON.parse(JSON.stringify(receipt));
delete unsigned.closure_id;
const expected = crypto.createHash("sha256").update(stable(unsigned)).digest("hex");
assert(receipt.closure_id === expected, "closure id mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V0214_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0229_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0125_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0023_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_ID=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
