import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_ECHO_CLOSURE.json", "utf8"));
const audit = fs.readFileSync("scripts/public-ecosystem-index-echo-audit.sh", "utf8");
const workflow = fs.readFileSync(".github/workflows/stranger-final-audit.yml", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_ECHO_CLOSURE", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(r.control_version === "0.1.9", "version mismatch");
assert(r.echo_mode === "control_public_ecosystem_index_to_surfaces_back_to_control", "echo mode mismatch");

assert(r.root_index.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.8-antimatterium-control-public-ecosystem-index", "control v018 release mismatch");
assert(r.root_index.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28148611545", "control v018 ci run mismatch");
assert(r.root_index.public_ecosystem_closure_index_id === "85f56c676d2c9bffff66cd59978b8bfcfffb6e8afae91258a71509f0531ba4ea", "ecosystem index id mismatch");

assert(r.surface_echo_releases.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.14-antimatterium-public-ecosystem-index-backlink", "core release mismatch");
assert(r.surface_echo_releases.core.id === "aa4f7e799f4c29cae39c9de07ee7ed011ba3eac42b831f743b00606d6e4639ed", "core echo id mismatch");

assert(r.surface_echo_releases.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.10-antimatterium-www-public-ecosystem-index-backlink", "www release mismatch");
assert(r.surface_echo_releases.www.id === "6b5f3844dffe293bc02c6bcb1b20397285a977b1172d1186621299c698d86078", "www echo id mismatch");

assert(r.surface_echo_releases.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.8-antimatterium-org-profile-public-ecosystem-index-backlink", "profile release mismatch");
assert(r.surface_echo_releases.org_profile.id === "d6eb675cf08baa8af13652dce164b01b3d2ac5d46245e6767a7752162f8e5d43", "profile echo id mismatch");

assert(r.inherited_identifiers.second_order_public_stranger_ci_closure_id === "16b259a7d2eb063a5a3c7b6e072c7cbed22f59b9642960f154d099581f157ee8", "second-order id mismatch");
assert(r.inherited_identifiers.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");

assert(audit.includes("v0.1.8-antimatterium-control-public-ecosystem-index"), "audit missing control v018 tag");
assert(audit.includes("v0.2.14-antimatterium-public-ecosystem-index-backlink"), "audit missing core v0214 tag");
assert(audit.includes("v0.1.10-antimatterium-www-public-ecosystem-index-backlink"), "audit missing www v0110 tag");
assert(audit.includes("v0.0.8-antimatterium-org-profile-public-ecosystem-index-backlink"), "audit missing profile v008 tag");
assert(audit.includes("ANTIMATTERIUM_PUBLIC_ECOSYSTEM_INDEX_ECHO_AUDIT_PASS=true"), "audit pass marker missing");

assert(pkg.scripts["audit:ecosystem-echo"] === "bash scripts/public-ecosystem-index-echo-audit.sh", "ecosystem echo audit script missing");
assert(pkg.scripts["verify:ecosystem-echo"] === "node scripts/verify-public-ecosystem-index-echo-closure.mjs", "ecosystem echo verifier missing");
assert(pkg.scripts.verify.includes("node scripts/verify-public-ecosystem-index-echo-closure.mjs"), "main verify missing echo verifier");

assert(workflow.includes("npm run audit:ecosystem-echo"), "workflow missing ecosystem echo audit");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(r.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_PUBLIC_ECOSYSTEM_INDEX_ECHO_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_PUBLIC_ECOSYSTEM_ECHO_GRAPH_CLOSED=true");
console.log("ANTIMATTERIUM_MOVE1_SURFACE_ECHOES_BOUND=true");
console.log("PUBLIC_ECOSYSTEM_INDEX_ECHO_CLOSURE_ID=" + r.public_ecosystem_index_echo_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
