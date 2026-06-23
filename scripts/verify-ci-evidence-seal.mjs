import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const seal = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_CI_EVIDENCE_SEAL.json", "utf8"));

assert(seal.schema === "ANTIMATTERIUM_CONTROL_CI_EVIDENCE_SEAL", "schema mismatch");
assert(seal.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(seal.control_version === "0.1.2", "version mismatch");
assert(seal.seal_mode === "github_actions_success_evidence", "seal mode mismatch");

assert(seal.prior_control_releases.public_cold_replay === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.0-antimatterium-control-public-cold-replay", "v010 release mismatch");
assert(seal.prior_control_releases.public_ci_replay_gate === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.1-antimatterium-control-public-ci-replay-gate", "v011 release mismatch");

assert(seal.bound_identifiers.ci_replay_gate_id === "11ab5ba82c3333386871508827f12ab6c614c973934f99f3d878d3c2ebaba673", "ci gate id mismatch");
assert(seal.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "cold replay id mismatch");
assert(seal.bound_identifiers.root_controller_id === "d2813e2a241a8a95dc7790174ba4522f9c2a4e66face80bf76acaa4363575663", "root controller id mismatch");
assert(seal.bound_identifiers.core_chain_os_id === "d0f3271f3808297cc8459bc0e19f0df5b5bce60c32bad87c56fb96b7b72cb577", "core id mismatch");
assert(seal.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www id mismatch");
assert(seal.bound_identifiers.profile_chain_os_surface_id === "13026b98a28d76d78d1ccdebe85013e0c9f87855fa59d27328dd298e3e4a2575", "profile id mismatch");

assert(seal.github_actions_evidence.verify.status === "completed", "verify run not completed");
assert(seal.github_actions_evidence.verify.conclusion === "success", "verify run not success");
assert(seal.github_actions_evidence.verify.url.includes("https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/"), "verify run url mismatch");

assert(seal.github_actions_evidence.cold_replay.status === "completed", "cold run not completed");
assert(seal.github_actions_evidence.cold_replay.conclusion === "success", "cold run not success");
assert(seal.github_actions_evidence.cold_replay.url.includes("https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/"), "cold run url mismatch");

for (const [key, value] of Object.entries(seal.ci_evidence_acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(seal.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(seal.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(seal.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(seal.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_CI_EVIDENCE_SEAL_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_VERIFY_RUN_SUCCESS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_COLD_REPLAY_RUN_SUCCESS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_GITHUB_ACTIONS_EVIDENCE_BOUND=true");
console.log("CI_EVIDENCE_SEAL_ID=" + seal.ci_evidence_seal_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
