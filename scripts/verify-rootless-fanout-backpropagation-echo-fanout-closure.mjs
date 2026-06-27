import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE.json", "utf8"));
const audit = fs.readFileSync("scripts/rootless-fanout-backpropagation-echo-fanout-closure-audit.sh", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const workflow = fs.existsSync(".github/workflows/stranger-final-audit.yml")
  ? fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8")
  : "";

assert(r.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.2.4", "version mismatch");
assert(r.closes === "MOVE_11_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT", "closure target mismatch");

assert(r.upstream_control_echo_closure.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.3-antimatterium-control-rootless-fanout-backpropagation-echo-closure", "control v023 release mismatch");
assert(r.upstream_control_echo_closure.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28267965467", "control v023 ci mismatch");
assert(r.upstream_control_echo_closure.rootless_fanout_backpropagation_echo_closure_id === "01ac56b5b2f42077580d464d5053ea3ae5860f3a2f05a46d68ca1c1805215649", "control v023 closure id mismatch");

assert(r.surface_fanout_echoes.core.core_rootless_fanout_backpropagation_echo_backlink_id === "a42952ee829a77a4916e5b1fd4f6c16aa3baf7167f3997c4fdad89d31b4e844e", "core fanout id mismatch");
assert(r.surface_fanout_echoes.www.www_rootless_fanout_backpropagation_echo_backlink_id === "675637017355486438fc8e56c009c029a55fcf20ec6a421e43a1d50719be3a18", "www fanout id mismatch");
assert(r.surface_fanout_echoes.org_profile.org_profile_rootless_fanout_backpropagation_echo_backlink_id === "7652960d085d04bb1365239b755462327b24834277900a7303769945755b389a", "org profile fanout id mismatch");

assert(audit.includes("v0.2.3-antimatterium-control-rootless-fanout-backpropagation-echo-closure"), "audit missing control v023");
assert(audit.includes("v0.2.18-antimatterium-rootless-fanout-backpropagation-echo-backlink"), "audit missing core v0218");
assert(audit.includes("v0.1.14-antimatterium-www-rootless-fanout-backpropagation-echo-backlink"), "audit missing www v0114");
assert(audit.includes("v0.0.12-antimatterium-org-profile-rootless-fanout-backpropagation-echo-backlink"), "audit missing org profile v0012");
assert(audit.includes("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_AUDIT_PASS=true"), "audit pass marker missing");

assert(pkg.scripts["verify:rootless-fanout-backpropagation-echo-fanout-closure"] === "node scripts/verify-rootless-fanout-backpropagation-echo-fanout-closure.mjs", "verify script missing");
assert(pkg.scripts["audit:rootless-fanout-backpropagation-echo-fanout-closure"] === "bash scripts/rootless-fanout-backpropagation-echo-fanout-closure-audit.sh", "audit script missing");
assert(pkg.scripts.verify.includes("node scripts/verify-rootless-fanout-backpropagation-echo-fanout-closure.mjs"), "main verify missing move 12 verifier");
assert(workflow.includes("npm run audit:rootless-fanout-backpropagation-echo-fanout-closure"), "workflow missing move 12 audit");

for (const [key, value] of Object.entries(r.closure)) assert(value === true, "closure field not true: " + key);
for (const [key, value] of Object.entries(r.boundaries)) assert(value === true, "boundary field not true: " + key);

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSED=true");
console.log("ANTIMATTERIUM_MOVE11_SURFACE_ECHOES_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_ID=" + r.rootless_fanout_backpropagation_echo_fanout_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
