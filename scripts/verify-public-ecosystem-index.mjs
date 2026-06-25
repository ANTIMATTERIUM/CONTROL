import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_CLOSURE_INDEX.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_CLOSURE_INDEX", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.1.8", "version mismatch");
assert(r.index_mode === "public_multi_repo_release_graph", "index mode mismatch");

assert(r.graph_root.control_second_order_closure.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.7-antimatterium-control-second-order-public-stranger-ci-closure", "v017 release mismatch");
assert(r.graph_root.control_second_order_closure.public_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28148467117", "v017 public ci run mismatch");
assert(r.graph_root.control_second_order_closure.id === "16b259a7d2eb063a5a3c7b6e072c7cbed22f59b9642960f154d099581f157ee8", "v017 closure id mismatch");

assert(r.graph_root.control_public_stranger_ci.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.6-antimatterium-control-public-stranger-ci", "v016 release mismatch");
assert(r.graph_root.control_public_stranger_ci.id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");

assert(r.surface_releases.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.13-antimatterium-public-stranger-ci-backlink", "core release mismatch");
assert(r.surface_releases.core.id === "fcfb10108a3229377763da470af0752998f02b367d63ec3589f52fd41c6a5d0d", "core id mismatch");

assert(r.surface_releases.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.9-antimatterium-www-public-stranger-ci-backlink", "www release mismatch");
assert(r.surface_releases.www.id === "6e884796bc7a4c83f7c596e32c98b0a1d382935d82ce82a15a22dd34d34304aa", "www id mismatch");

assert(r.surface_releases.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.7-antimatterium-org-profile-public-stranger-ci-backlink", "profile release mismatch");
assert(r.surface_releases.org_profile.id === "7e79534e6263db41aea2bfe96720a87a68aac3008f596e3db1f19dd558ecccc5", "profile id mismatch");

assert(r.chain_identifiers.public_release_matrix_id === "c062a81788d930fe0924526b94d5b6dbadc027337d2ab416c86710771d8c27c1", "matrix id mismatch");
assert(r.chain_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "stranger audit id mismatch");
assert(r.chain_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "bidirectional closure id mismatch");
assert(r.chain_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(pkg.scripts["verify:ecosystem-index"] === "node scripts/verify-public-ecosystem-index.mjs", "package ecosystem verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-public-ecosystem-index.mjs"), "main verify missing ecosystem verifier");

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(r.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_PUBLIC_ECOSYSTEM_GRAPH_CLOSED=true");
console.log("ANTIMATTERIUM_ALL_PUBLIC_SURFACES_INDEXED=true");
console.log("PUBLIC_ECOSYSTEM_CLOSURE_INDEX_ID=" + r.public_ecosystem_closure_index_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
