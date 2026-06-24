import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const seal = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_BIDIRECTIONAL_PUBLIC_CLOSURE_SEAL.json", "utf8"));

assert(seal.schema === "ANTIMATTERIUM_CONTROL_BIDIRECTIONAL_PUBLIC_CLOSURE_SEAL", "schema mismatch");
assert(seal.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(seal.control_version === "0.1.3", "version mismatch");
assert(seal.closure_mode === "control_to_surfaces_and_surfaces_to_control", "closure mode mismatch");

assert(seal.control_releases.public_cold_replay === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.0-antimatterium-control-public-cold-replay", "control v010 mismatch");
assert(seal.control_releases.public_ci_replay_gate === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.1-antimatterium-control-public-ci-replay-gate", "control v011 mismatch");
assert(seal.control_releases.ci_evidence_seal === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.2-antimatterium-control-ci-evidence-seal", "control v012 mismatch");

assert(seal.surface_backlink_releases.core === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.12-antimatterium-control-ci-evidence-backlink", "core release mismatch");
assert(seal.surface_backlink_releases.www === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.8-antimatterium-www-control-ci-evidence-backlink", "www release mismatch");
assert(seal.surface_backlink_releases.org_profile === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink", "profile release mismatch");

assert(seal.github_actions_evidence.verify_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28054724647", "verify run mismatch");
assert(seal.github_actions_evidence.cold_replay_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28054726218", "cold replay run mismatch");

assert(seal.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence seal mismatch");
assert(seal.bound_identifiers.ci_replay_gate_id === "11ab5ba82c3333386871508827f12ab6c614c973934f99f3d878d3c2ebaba673", "ci replay gate mismatch");
assert(seal.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "control cold replay mismatch");
assert(seal.bound_identifiers.root_controller_id === "d2813e2a241a8a95dc7790174ba4522f9c2a4e66face80bf76acaa4363575663", "root controller mismatch");

assert(seal.bound_identifiers.core_chain_os_id === "d0f3271f3808297cc8459bc0e19f0df5b5bce60c32bad87c56fb96b7b72cb577", "core chain mismatch");
assert(seal.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www chain mismatch");
assert(seal.bound_identifiers.profile_chain_os_surface_id === "13026b98a28d76d78d1ccdebe85013e0c9f87855fa59d27328dd298e3e4a2575", "profile chain mismatch");

assert(seal.bound_identifiers.core_control_backlink_id === "603a4fb88b0a00d4d10b904b870c77f3c9354f90442e180261957da59014ccf7", "core backlink mismatch");
assert(seal.bound_identifiers.www_control_backlink_id === "5551c9f397d947f71e07d2c90aaebbc669964c672b81aaec16d4b6c50869dd70", "www backlink mismatch");
assert(seal.bound_identifiers.org_profile_control_backlink_id === "716789cafa328f3dafa27115ad2e81bd512d16a237c05cd8a52a0d1d3650d084", "org profile backlink mismatch");

for (const [key, value] of Object.entries(seal.closure_acceptance)) {
  assert(value === true, "closure acceptance not true: " + key);
}

assert(seal.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(seal.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(seal.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(seal.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_BIDIRECTIONAL_PUBLIC_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_V010_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V011_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_V012_BOUND=true");
console.log("ANTIMATTERIUM_CORE_BACKLINK_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_BACKLINK_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_BACKLINK_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_BIDIRECTIONAL_PUBLIC_CHAIN_CLOSED=true");
console.log("BIDIRECTIONAL_PUBLIC_CLOSURE_ID=" + seal.bidirectional_public_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
