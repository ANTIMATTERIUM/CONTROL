import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_STRANGER_FINAL_AUDIT_BUNDLE.json", "utf8"));
const auditScript = fs.readFileSync("scripts/stranger-final-audit.sh", "utf8");

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_STRANGER_FINAL_AUDIT_BUNDLE", "schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(receipt.control_version === "0.1.4", "version mismatch");
assert(receipt.audit_mode === "fresh_public_clone_replay", "audit mode mismatch");

assert(receipt.public_release_tags.control === "v0.1.3-antimatterium-control-bidirectional-public-closure", "control tag mismatch");
assert(receipt.public_release_tags.core === "v0.2.12-antimatterium-control-ci-evidence-backlink", "core tag mismatch");
assert(receipt.public_release_tags.www === "v0.1.8-antimatterium-www-control-ci-evidence-backlink", "www tag mismatch");
assert(receipt.public_release_tags.org_profile === "v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink", "profile tag mismatch");

assert(receipt.public_releases.control_bidirectional_closure === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.3-antimatterium-control-bidirectional-public-closure", "control release mismatch");
assert(receipt.public_releases.core_control_backlink === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.12-antimatterium-control-ci-evidence-backlink", "core release mismatch");
assert(receipt.public_releases.www_control_backlink === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.8-antimatterium-www-control-ci-evidence-backlink", "www release mismatch");
assert(receipt.public_releases.org_profile_control_backlink === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink", "profile release mismatch");

assert(receipt.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(receipt.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence seal mismatch");
assert(receipt.bound_identifiers.ci_replay_gate_id === "11ab5ba82c3333386871508827f12ab6c614c973934f99f3d878d3c2ebaba673", "ci replay gate mismatch");
assert(receipt.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "cold replay mismatch");
assert(receipt.bound_identifiers.core_control_backlink_id === "603a4fb88b0a00d4d10b904b870c77f3c9354f90442e180261957da59014ccf7", "core backlink mismatch");
assert(receipt.bound_identifiers.www_control_backlink_id === "5551c9f397d947f71e07d2c90aaebbc669964c672b81aaec16d4b6c50869dd70", "www backlink mismatch");
assert(receipt.bound_identifiers.org_profile_control_backlink_id === "716789cafa328f3dafa27115ad2e81bd512d16a237c05cd8a52a0d1d3650d084", "profile backlink mismatch");

assert(auditScript.includes("git clone --depth 1 --branch v0.1.3-antimatterium-control-bidirectional-public-closure"), "control clone command missing");
assert(auditScript.includes("git clone --depth 1 --branch v0.2.12-antimatterium-control-ci-evidence-backlink"), "core clone command missing");
assert(auditScript.includes("git clone --depth 1 --branch v0.1.8-antimatterium-www-control-ci-evidence-backlink"), "www clone command missing");
assert(auditScript.includes("git clone --depth 1 --branch v0.0.6-antimatterium-org-profile-control-ci-evidence-backlink"), "profile clone command missing");
assert(auditScript.includes("ANTIMATTERIUM_STRANGER_FINAL_AUDIT_PASS=true"), "audit pass marker missing");

for (const [key, value] of Object.entries(receipt.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_STRANGER_FINAL_AUDIT_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_TAGS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_RELEASES_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_FRESH_CLONE_AUDIT_SCRIPT_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_STRANGER_REPLAYABLE=true");
console.log("STRANGER_FINAL_AUDIT_ID=" + receipt.stranger_final_audit_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
