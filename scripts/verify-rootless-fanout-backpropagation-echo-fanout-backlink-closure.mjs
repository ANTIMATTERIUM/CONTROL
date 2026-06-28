import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE", "schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(receipt.control_version === "0.2.5", "version mismatch");

assert(receipt.closes.prior_control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.4-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-closure", "control v024 release mismatch");
assert(receipt.closes.prior_control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28281726132", "control v024 ci mismatch");
assert(receipt.closes.rootless_fanout_backpropagation_echo_fanout_closure_id === "f295de72115effeba53942447cb96919bc468661d35a28223057e57890b58f8c", "closure id mismatch");

assert(receipt.move13_surface_backlinks.core.backlink_id === "d6ac1d80ce8c00056a5e5a04c2604ab0811d23f118c5a2aeb9f9170f6c313da2", "core backlink mismatch");
assert(receipt.move13_surface_backlinks.www.backlink_id === "f3378debb3a554a985baf28af67bb90619a612ea6fea1fddb9fed1e82eba60e4", "www backlink mismatch");
assert(receipt.move13_surface_backlinks.org_profile.backlink_id === "0d7c88bdee5854621a32de2e285fd1b9cc1807e8b3124802cf5ba4725866316c", "org profile backlink mismatch");

for (const [k, v] of Object.entries(receipt.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(receipt.boundaries)) assert(v === true, "boundary not true: " + k);

assert(pkg.version === "0.2.5", "package version mismatch");
assert(pkg.scripts.verify.includes("verify-rootless-fanout-backpropagation-echo-fanout-backlink-closure.mjs"), "verify chain missing move14 verifier");
assert(pkg.scripts["audit:rootless-fanout-backpropagation-echo-fanout-backlink-closure"], "move14 audit script missing");
assert(workflow.includes("npm run audit:rootless-fanout-backpropagation-echo-fanout-backlink-closure"), "workflow missing move14 audit");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKPROPAGATION_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V024_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0219_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0115_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0013_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_ID=" + receipt.rootless_fanout_backpropagation_echo_fanout_backlink_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
