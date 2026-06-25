import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_PUBLIC_ROOTLESS_RECONSTRUCTION_INDEX.json", "utf8"));
const audit = fs.readFileSync("scripts/public-rootless-reconstruction-audit.sh", "utf8");
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_ROOTLESS_RECONSTRUCTION_INDEX", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.2.0", "version mismatch");
assert(r.reconstruction_mode === "public_releases_only_no_local_root_required", "reconstruction mode mismatch");

assert(r.latest_public_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.9-antimatterium-control-public-ecosystem-index-echo-closure", "latest control release mismatch");
assert(r.latest_public_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28149348423", "latest control ci run mismatch");
assert(r.latest_public_control.id === "57965b352d283bd06ff513e8d3e30cfa9578cedb4fb55eea5b2ce2962ae26172", "latest control id mismatch");

assert(r.public_reconstruction_sequence.length === 5, "reconstruction sequence length mismatch");
assert(r.public_reconstruction_sequence[0].id === "85f56c676d2c9bffff66cd59978b8bfcfffb6e8afae91258a71509f0531ba4ea", "sequence control v018 mismatch");
assert(r.public_reconstruction_sequence[1].id === "aa4f7e799f4c29cae39c9de07ee7ed011ba3eac42b831f743b00606d6e4639ed", "sequence core mismatch");
assert(r.public_reconstruction_sequence[2].id === "6b5f3844dffe293bc02c6bcb1b20397285a977b1172d1186621299c698d86078", "sequence www mismatch");
assert(r.public_reconstruction_sequence[3].id === "d6eb675cf08baa8af13652dce164b01b3d2ac5d46245e6767a7752162f8e5d43", "sequence profile mismatch");
assert(r.public_reconstruction_sequence[4].id === "57965b352d283bd06ff513e8d3e30cfa9578cedb4fb55eea5b2ce2962ae26172", "sequence control v019 mismatch");

assert(audit.includes("v0.1.9-antimatterium-control-public-ecosystem-index-echo-closure"), "audit missing control v019");
assert(audit.includes("v0.1.8-antimatterium-control-public-ecosystem-index"), "audit missing control v018");
assert(audit.includes("v0.2.14-antimatterium-public-ecosystem-index-backlink"), "audit missing core v0214");
assert(audit.includes("v0.1.10-antimatterium-www-public-ecosystem-index-backlink"), "audit missing www v0110");
assert(audit.includes("v0.0.8-antimatterium-org-profile-public-ecosystem-index-backlink"), "audit missing profile v008");
assert(audit.includes("ANTIMATTERIUM_PUBLIC_ROOTLESS_RECONSTRUCTION_AUDIT_PASS=true"), "audit pass marker missing");

assert(pkg.scripts["audit:rootless-reconstruction"] === "bash scripts/public-rootless-reconstruction-audit.sh", "rootless audit script missing");
assert(pkg.scripts["verify:rootless-reconstruction"] === "node scripts/verify-public-rootless-reconstruction-index.mjs", "rootless verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-public-rootless-reconstruction-index.mjs"), "main verify missing rootless verifier");

assert(workflow.includes("npm run audit:rootless-reconstruction"), "workflow missing rootless reconstruction audit");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(r.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_PUBLIC_ROOTLESS_RECONSTRUCTION_INDEX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_PUBLIC_RELEASES_SUFFICIENT=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("PUBLIC_ROOTLESS_RECONSTRUCTION_INDEX_ID=" + r.public_rootless_reconstruction_index_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
