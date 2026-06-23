import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(path) {
  return fs.readFileSync(path, "utf8");
}

const receipt = JSON.parse(read("control/ANTIMATTERIUM_CONTROL_PUBLIC_CI_REPLAY_GATE.json"));
const verifyWorkflow = read(".github/workflows/verify.yml");
const coldWorkflow = read(".github/workflows/cold-replay.yml");
const packageJson = JSON.parse(read("package.json"));

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_CI_REPLAY_GATE", "schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(receipt.control_version === "0.1.1", "control version mismatch");
assert(receipt.gate_mode === "github_actions_verify_and_cold_replay", "gate mode mismatch");

assert(receipt.prior_control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.0-antimatterium-control-public-cold-replay", "prior release mismatch");
assert(receipt.public_releases.core === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.11-antimatterium-public-chain-os", "core release mismatch");
assert(receipt.public_releases.www === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.7-antimatterium-www-public-chain-os-surface", "www release mismatch");
assert(receipt.public_releases.org_profile === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.5-antimatterium-org-profile-public-chain-os-surface", "profile release mismatch");

assert(receipt.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "control cold replay id mismatch");
assert(receipt.bound_identifiers.root_controller_id === "d2813e2a241a8a95dc7790174ba4522f9c2a4e66face80bf76acaa4363575663", "root controller id mismatch");
assert(receipt.bound_identifiers.core_chain_os_id === "d0f3271f3808297cc8459bc0e19f0df5b5bce60c32bad87c56fb96b7b72cb577", "core id mismatch");
assert(receipt.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www id mismatch");
assert(receipt.bound_identifiers.profile_chain_os_surface_id === "13026b98a28d76d78d1ccdebe85013e0c9f87855fa59d27328dd298e3e4a2575", "profile id mismatch");
assert(receipt.npm.version === "0.2.2", "npm version mismatch");

assert(verifyWorkflow.includes("workflow_dispatch:"), "verify workflow dispatch missing");
assert(verifyWorkflow.includes("pull_request:"), "verify PR gate missing");
assert(verifyWorkflow.includes("push:"), "verify push gate missing");
assert(verifyWorkflow.includes("npm run verify"), "verify command missing");

assert(coldWorkflow.includes("workflow_dispatch:"), "cold workflow dispatch missing");
assert(coldWorkflow.includes("pull_request:"), "cold replay PR gate missing");
assert(coldWorkflow.includes("push:"), "cold replay push gate missing");
assert(coldWorkflow.includes("schedule:"), "cold replay schedule missing");
assert(coldWorkflow.includes("npm run verify"), "cold verify command missing");
assert(coldWorkflow.includes("npm run replay"), "cold replay command missing");

assert(packageJson.scripts.verify === "node scripts/verify-control.mjs && node scripts/scan-public-safety.mjs && node scripts/verify-ci-gate.mjs", "verify script mismatch");
assert(packageJson.scripts.replay === "bash scripts/cold-replay.sh", "replay script mismatch");

for (const [key, value] of Object.entries(receipt.ci_acceptance)) {
  assert(value === true, "ci acceptance not true: " + key);
}

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_CI_GATE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_VERIFY_WORKFLOW_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_COLD_REPLAY_WORKFLOW_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_WORKFLOW_DISPATCH_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PULL_REQUEST_GATE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUSH_MAIN_GATE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_SCHEDULED_COLD_REPLAY_BOUND=true");
console.log("CI_REPLAY_GATE_ID=" + receipt.ci_replay_gate_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
