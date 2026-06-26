import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE.json", "utf8"));
const audit = fs.readFileSync("scripts/rootless-fanout-backpropagation-echo-audit.sh", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const workflow = fs.existsSync(".github/workflows/stranger-final-audit.yml")
  ? fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8")
  : "";

assert(r.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.2.3", "version mismatch");
assert(r.closes === "MOVE_9_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION", "closure target mismatch");

assert(r.upstream_control_closure.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.2-antimatterium-control-rootless-fanout-backlink-closure", "control v022 release mismatch");
assert(r.upstream_control_closure.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28265584824", "control v022 ci mismatch");
assert(r.upstream_control_closure.rootless_fanout_backlink_closure_id === "9d411e38f3dd5a7f97bd33e4d8955a4646c6bcd346ffed2c97f6176b32d17922", "control v022 closure id mismatch");

assert(r.surface_backpropagation_echoes.core.core_rootless_fanout_backlink_closure_backlink_id === "2cdb00b9cfb8812aa58f9afcbaa05ab2ba84ad49f9946a5ba69994c48111f3ef", "core echo id mismatch");
assert(r.surface_backpropagation_echoes.www.www_rootless_fanout_backlink_closure_backlink_id === "f527d82bbee5231c0be501929d53ca79c0fc1878d174b3e314762e9a224d1504", "www echo id mismatch");
assert(r.surface_backpropagation_echoes.org_profile.org_profile_rootless_fanout_backlink_closure_backlink_id === "f598566988b058e7ad4eba1c5fce7b4cdc8518f53ecbee56c840cdfb93345feb", "org profile echo id mismatch");

assert(audit.includes("v0.2.2-antimatterium-control-rootless-fanout-backlink-closure"), "audit missing control v022");
assert(audit.includes("v0.2.17-antimatterium-rootless-fanout-backlink-closure-backlink"), "audit missing core v0217");
assert(audit.includes("v0.1.13-antimatterium-www-rootless-fanout-backlink-closure-backlink"), "audit missing www v0113");
assert(audit.includes("v0.0.11-antimatterium-org-profile-rootless-fanout-backlink-closure-backlink"), "audit missing org profile v0011");
assert(audit.includes("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_AUDIT_PASS=true"), "audit pass marker missing");

assert(pkg.scripts["verify:rootless-fanout-backpropagation-echo"] === "node scripts/verify-rootless-fanout-backpropagation-echo-closure.mjs", "verify script missing");
assert(pkg.scripts["audit:rootless-fanout-backpropagation-echo"] === "bash scripts/rootless-fanout-backpropagation-echo-audit.sh", "audit script missing");
assert(pkg.scripts.verify.includes("node scripts/verify-rootless-fanout-backpropagation-echo-closure.mjs"), "main verify missing move 10 verifier");
assert(workflow.includes("npm run audit:rootless-fanout-backpropagation-echo"), "workflow missing move 10 audit");

for (const [key, value] of Object.entries(r.closure)) assert(value === true, "closure field not true: " + key);
for (const [key, value] of Object.entries(r.boundaries)) assert(value === true, "boundary field not true: " + key);

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSED=true");
console.log("ANTIMATTERIUM_MOVE9_SURFACE_ECHOES_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE_ID=" + r.rootless_fanout_backpropagation_echo_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
