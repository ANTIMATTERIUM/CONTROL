import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

const control = read("control/ANTIMATTERIUM_CONTROL_PUBLIC_COLD_REPLAY.json");

assert(control.schema === "ANTIMATTERIUM_CONTROL_PUBLIC_COLD_REPLAY", "schema mismatch");
assert(control.object === "ANTIMATTERIUM_CONTROL", "object mismatch");
assert(control.control_version === "0.1.0", "version mismatch");
assert(control.control_mode === "public_cold_replay", "mode mismatch");

assert(control.public_releases.core === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.11-antimatterium-public-chain-os", "core release mismatch");
assert(control.public_releases.www === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.7-antimatterium-www-public-chain-os-surface", "www release mismatch");
assert(control.public_releases.org_profile === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.5-antimatterium-org-profile-public-chain-os-surface", "org profile release mismatch");

assert(control.npm.version === "0.2.2", "npm version mismatch");

assert(control.bound_identifiers.root_controller_id === "d2813e2a241a8a95dc7790174ba4522f9c2a4e66face80bf76acaa4363575663", "root controller mismatch");
assert(control.bound_identifiers.core_chain_os_id === "d0f3271f3808297cc8459bc0e19f0df5b5bce60c32bad87c56fb96b7b72cb577", "core chain mismatch");
assert(control.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www chain mismatch");
assert(control.bound_identifiers.profile_chain_os_surface_id === "13026b98a28d76d78d1ccdebe85013e0c9f87855fa59d27328dd298e3e4a2575", "profile chain mismatch");
assert(control.bound_identifiers.npm_receipt_id === "780244fd953ed99fb20cd7cebade4c73b3dc5ade4f070bb37753281c5ca2e7aa", "npm receipt mismatch");
assert(control.bound_identifiers.verifier_id === "59972b8a13e1d1896e76ad44f18a5d5ca58595afd624842d4557f2557a69696b", "verifier mismatch");
assert(control.bound_identifiers.audit_id === "fcadd3a654978081f7ab9a4e775d1ee1d4e2960c14a5812cd2c349f862959d30", "audit mismatch");
assert(control.bound_identifiers.control_digest === "bb75f4462f42f37b5fd2faa5d511dd90213df9f60997f16b5875b80a8f99b0b6", "control digest mismatch");
assert(control.bound_identifiers.runtime_event_id === "f4923422f6f97910816b685376aacf9697222a6c09b1c0cabdb63419c07616d7", "runtime mismatch");
assert(control.bound_identifiers.replay_id === "63a62592964d5c8fe2c23d8be06972eef297446d5708c898868dadae4bb92319", "replay mismatch");

for (const [key, value] of Object.entries(control.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(control.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(control.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(control.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(control.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_CONTROL_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_COLD_REPLAY_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_CORE_CHAIN_OS_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_WWW_CHAIN_OS_SURFACE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_ORG_PROFILE_CHAIN_OS_SURFACE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_NPM_022_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_ROOT_CONTROLLER_BOUND=true");
console.log("CONTROL_COLD_REPLAY_ID=" + control.control_cold_replay_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
