import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_SECOND_ORDER_PUBLIC_STRANGER_CI_CLOSURE.json", "utf8"));
const audit = fs.readFileSync("scripts/public-stranger-ci-backpropagation-audit.sh", "utf8");
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_SECOND_ORDER_PUBLIC_STRANGER_CI_CLOSURE", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.1.7", "version mismatch");
assert(r.closure_mode === "control_to_public_ci_to_surfaces_back_to_control", "closure mode mismatch");

assert(r.control_public_ci.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.6-antimatterium-control-public-stranger-ci", "control release mismatch");
assert(r.control_public_ci.run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28130879044", "control run mismatch");
assert(r.control_public_ci.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");

assert(r.surface_backpropagation_releases.core === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.13-antimatterium-public-stranger-ci-backlink", "core release mismatch");
assert(r.surface_backpropagation_releases.www === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.9-antimatterium-www-public-stranger-ci-backlink", "www release mismatch");
assert(r.surface_backpropagation_releases.org_profile === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.7-antimatterium-org-profile-public-stranger-ci-backlink", "profile release mismatch");

assert(r.bound_identifiers.public_release_matrix_id === "c062a81788d930fe0924526b94d5b6dbadc027337d2ab416c86710771d8c27c1", "matrix id mismatch");
assert(r.bound_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "stranger audit id mismatch");
assert(r.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(r.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");
assert(r.bound_identifiers.core_public_stranger_ci_backlink_id === "fcfb10108a3229377763da470af0752998f02b367d63ec3589f52fd41c6a5d0d", "core backlink id mismatch");
assert(r.bound_identifiers.www_public_stranger_ci_backlink_id === "6e884796bc7a4c83f7c596e32c98b0a1d382935d82ce82a15a22dd34d34304aa", "www backlink id mismatch");
assert(r.bound_identifiers.org_profile_public_stranger_ci_backlink_id === "7e79534e6263db41aea2bfe96720a87a68aac3008f596e3db1f19dd558ecccc5", "profile backlink id mismatch");

assert(audit.includes("v0.1.6-antimatterium-control-public-stranger-ci"), "audit missing control tag");
assert(audit.includes("v0.2.13-antimatterium-public-stranger-ci-backlink"), "audit missing core tag");
assert(audit.includes("v0.1.9-antimatterium-www-public-stranger-ci-backlink"), "audit missing www tag");
assert(audit.includes("v0.0.7-antimatterium-org-profile-public-stranger-ci-backlink"), "audit missing profile tag");
assert(audit.includes("ANTIMATTERIUM_PUBLIC_STRANGER_CI_BACKPROPAGATION_AUDIT_PASS=true"), "audit pass marker missing");

assert(workflow.includes("npm run audit:final"), "workflow final audit missing");
assert(workflow.includes("npm run audit:backpropagation"), "workflow backpropagation audit missing");
assert(workflow.includes("ANTIMATTERIUM_SECOND_ORDER_PUBLIC_STRANGER_CI_LOOP_CLOSED=true"), "workflow second-order marker missing");

for (const [key, value] of Object.entries(r.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(pkg.scripts["audit:backpropagation"] === "bash scripts/public-stranger-ci-backpropagation-audit.sh", "audit backpropagation script missing");
assert(pkg.scripts["verify:second-order-public-closure"] === "node scripts/verify-second-order-public-stranger-ci-closure.mjs", "second-order verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-second-order-public-stranger-ci-closure.mjs"), "main verify does not include second-order verifier");

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(r.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_SECOND_ORDER_PUBLIC_STRANGER_CI_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_STRANGER_CI_BACKPROPAGATION_BOUND=true");
console.log("ANTIMATTERIUM_SECOND_ORDER_PUBLIC_STRANGER_CI_LOOP_CLOSED=true");
console.log("SECOND_ORDER_PUBLIC_STRANGER_CI_CLOSURE_ID=" + r.second_order_public_stranger_ci_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
