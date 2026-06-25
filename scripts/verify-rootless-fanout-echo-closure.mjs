import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_ECHO_CLOSURE.json", "utf8"));
const audit = fs.readFileSync("scripts/rootless-fanout-echo-audit.sh", "utf8");
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_ECHO_CLOSURE", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.2.1", "version mismatch");
assert(r.closure_mode === "control_rootless_reconstruction_to_surfaces_back_to_control", "closure mode mismatch");

assert(r.rootless_reconstruction_root.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.0-antimatterium-control-public-rootless-reconstruction-index", "control v020 release mismatch");
assert(r.rootless_reconstruction_root.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28149722481", "control v020 ci run mismatch");
assert(r.rootless_reconstruction_root.id === "7cab442dcb14c223ffe740cd1c1c9c5f107e7bd6ee48957db775d493e93e5e8e", "rootless id mismatch");

assert(r.surface_echoes.core.id === "ff854c79f3bba4166e1545b68f6cdcc18b9d2383ca2c9fdafeb818f50240d72f", "core echo id mismatch");
assert(r.surface_echoes.www.id === "3dd5c95367eceae8453a45181cb8859bb8c10497b4781900dd3e8b8a65d73836", "www echo id mismatch");
assert(r.surface_echoes.org_profile.id === "114e334a9b04dd887421f1fa5cd95084db718fdd07c17d45a49ffc8c2d2097d4", "profile echo id mismatch");

assert(audit.includes("v0.2.0-antimatterium-control-public-rootless-reconstruction-index"), "audit missing control v020");
assert(audit.includes("v0.2.15-antimatterium-public-rootless-reconstruction-backlink"), "audit missing core v0215");
assert(audit.includes("v0.1.11-antimatterium-www-public-rootless-reconstruction-backlink"), "audit missing www v0111");
assert(audit.includes("v0.0.9-antimatterium-org-profile-public-rootless-reconstruction-backlink"), "audit missing profile v009");
assert(audit.includes("ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_AUDIT_PASS=true"), "audit pass marker missing");

assert(pkg.scripts["audit:rootless-fanout-echo"] === "bash scripts/rootless-fanout-echo-audit.sh", "fanout audit script missing");
assert(pkg.scripts["verify:rootless-fanout-echo"] === "node scripts/verify-rootless-fanout-echo-closure.mjs", "fanout verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-rootless-fanout-echo-closure.mjs"), "main verify missing fanout verifier");

assert(workflow.includes("npm run audit:rootless-fanout-echo"), "workflow missing fanout audit");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_ECHO_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_GRAPH_CLOSED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_ECHO_CLOSURE_ID=" + r.rootless_fanout_echo_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
