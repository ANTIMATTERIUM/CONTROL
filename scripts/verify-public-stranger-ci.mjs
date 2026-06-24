import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_CI.json", "utf8"));
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_CI", "schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(receipt.control_version === "0.1.6", "version mismatch");
assert(receipt.ci_mode === "public_github_actions_stranger_final_audit", "ci mode mismatch");

assert(receipt.workflow.path === ".github/workflows/stranger-final-audit.yml", "workflow path mismatch");
assert(receipt.workflow.name === "ANTIMATTERIUM Stranger Final Audit", "workflow name mismatch");
assert(receipt.workflow.dispatch === true, "dispatch not bound");
assert(receipt.workflow.scheduled === true, "schedule not bound");
assert(receipt.workflow.pull_request_gate === true, "pull request gate not bound");
assert(receipt.workflow.push_main_gate === true, "push main gate not bound");

assert(receipt.public_releases.public_release_matrix === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.5-antimatterium-control-public-release-matrix", "matrix release mismatch");
assert(receipt.public_releases.stranger_final_audit === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.4-antimatterium-control-stranger-final-audit", "audit release mismatch");
assert(receipt.public_releases.bidirectional_public_closure === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.3-antimatterium-control-bidirectional-public-closure", "closure release mismatch");

assert(receipt.bound_identifiers.public_release_matrix_id === "c062a81788d930fe0924526b94d5b6dbadc027337d2ab416c86710771d8c27c1", "matrix id mismatch");
assert(receipt.bound_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "stranger audit id mismatch");
assert(receipt.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(receipt.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");

assert(workflow.includes("name: ANTIMATTERIUM Stranger Final Audit"), "workflow name missing");
assert(workflow.includes("workflow_dispatch:"), "workflow dispatch missing");
assert(workflow.includes("schedule:"), "schedule missing");
assert(workflow.includes("pull_request:"), "pull request gate missing");
assert(workflow.includes("push:"), "push gate missing");
assert(workflow.includes("npm run verify"), "verify command missing");
assert(workflow.includes("npm run audit:final"), "audit final command missing");
assert(workflow.includes("ANTIMATTERIUM_PUBLIC_STRANGER_CI_PASS=true"), "ci pass marker missing");
assert(workflow.includes("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"), "physical boundary marker missing");

for (const [key, value] of Object.entries(receipt.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(pkg.scripts["verify:public-stranger-ci"] === "node scripts/verify-public-stranger-ci.mjs", "package verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-public-stranger-ci.mjs"), "main verify does not include public stranger ci verifier");

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_CI_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_WORKFLOW_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_DISPATCH_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_SCHEDULE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_PR_GATE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_PUSH_GATE_BOUND=true");
console.log("PUBLIC_STRANGER_CI_ID=" + receipt.public_stranger_ci_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
