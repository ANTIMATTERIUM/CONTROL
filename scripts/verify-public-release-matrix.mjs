import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const matrix = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(matrix.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX", "schema mismatch");
assert(matrix.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(matrix.control_version === "0.1.5", "version mismatch");
assert(matrix.matrix_mode === "public_release_index_and_replay_entrypoint", "matrix mode mismatch");

assert(matrix.public_release_matrix.control.v010_public_cold_replay === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.0-antimatterium-control-public-cold-replay", "control v010 mismatch");
assert(matrix.public_release_matrix.control.v011_public_ci_replay_gate === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.1-antimatterium-control-public-ci-replay-gate", "control v011 mismatch");
assert(matrix.public_release_matrix.control.v012_ci_evidence_seal === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.2-antimatterium-control-ci-evidence-seal", "control v012 mismatch");
assert(matrix.public_release_matrix.control.v013_bidirectional_public_closure === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.3-antimatterium-control-bidirectional-public-closure", "control v013 mismatch");
assert(matrix.public_release_matrix.control.v014_stranger_final_audit === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.4-antimatterium-control-stranger-final-audit", "control v014 mismatch");

assert(matrix.public_release_matrix.surfaces.core_v0212_control_backlink === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.12-antimatterium-control-ci-evidence-backlink", "core release mismatch");
assert(matrix.public_release_matrix.surfaces.www_v018_control_backlink === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.8-antimatterium-www-control-ci-evidence-backlink", "www release mismatch");
assert(matrix.public_release_matrix.surfaces.org_profile_v006_control_backlink === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink", "profile release mismatch");

assert(matrix.public_release_matrix.distribution.npm_package === "https://www.npmjs.com/package/@antimatterium/antimatterium", "npm package mismatch");
assert(matrix.public_release_matrix.distribution.npm_version === "0.2.2", "npm version mismatch");

assert(matrix.replay_entrypoints.primary === "npm run audit:final", "primary replay mismatch");
assert(matrix.replay_entrypoints.local_verify === "npm run verify", "local verify mismatch");
assert(matrix.replay_entrypoints.matrix_verify === "npm run verify:release-matrix", "matrix verify mismatch");

assert(matrix.bound_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "stranger audit id mismatch");
assert(matrix.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(matrix.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");
assert(matrix.bound_identifiers.ci_replay_gate_id === "11ab5ba82c3333386871508827f12ab6c614c973934f99f3d878d3c2ebaba673", "ci gate id mismatch");
assert(matrix.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "cold replay id mismatch");
assert(matrix.bound_identifiers.core_control_backlink_id === "603a4fb88b0a00d4d10b904b870c77f3c9354f90442e180261957da59014ccf7", "core backlink id mismatch");
assert(matrix.bound_identifiers.www_control_backlink_id === "5551c9f397d947f71e07d2c90aaebbc669964c672b81aaec16d4b6c50869dd70", "www backlink id mismatch");
assert(matrix.bound_identifiers.org_profile_control_backlink_id === "716789cafa328f3dafa27115ad2e81bd512d16a237c05cd8a52a0d1d3650d084", "profile backlink id mismatch");

for (const [key, value] of Object.entries(matrix.matrix_acceptance)) {
  assert(value === true, "matrix acceptance not true: " + key);
}

assert(pkg.scripts["audit:final"] === "bash scripts/stranger-final-audit.sh", "audit final script missing");
assert(pkg.scripts["verify:release-matrix"] === "node scripts/verify-public-release-matrix.mjs", "matrix verify script missing");
assert(pkg.scripts.verify.includes("node scripts/verify-public-release-matrix.mjs"), "main verify does not include matrix verifier");

assert(matrix.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(matrix.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(matrix.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(matrix.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_ALL_RELEASES_LISTED=true");
console.log("ANTIMATTERIUM_CONTROL_ALL_SURFACE_BACKLINKS_LISTED=true");
console.log("ANTIMATTERIUM_CONTROL_FINAL_AUDIT_ENTRYPOINT_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX_ID=" + matrix.public_release_matrix_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
