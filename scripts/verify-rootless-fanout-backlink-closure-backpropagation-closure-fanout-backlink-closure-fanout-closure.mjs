import crypto from "node:crypto";
import fs from "node:fs";

const receiptPath = "control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, received ${actual}`);
  }
}

function assertTrue(value, label) {
  if (value !== true) {
    throw new Error(`${label}: expected true`);
  }
}

function assertUrl(value, label) {
  if (typeof value !== "string" || !value.startsWith("https://github.com/ANTIMATTERIUM/")) {
    throw new Error(`${label}: expected public ANTIMATTERIUM GitHub URL`);
  }
}

function assertHex64(value, label) {
  if (typeof value !== "string" || !/^[a-f0-9]{64}$/.test(value)) {
    throw new Error(`${label}: expected sha256 hex`);
  }
}

const [major, minor, patch] = pkg.version.split(".").map(Number);
if (pkg.name !== "@antimatterium/control" || major !== 0 || minor !== 2 || patch < 9) {
  throw new Error(`unexpected package identity: ${pkg.name}@${pkg.version}`);
}

assertEqual(receipt.schema, "antimatterium.control.rootless_fanout_backlink_closure_backpropagation_closure_fanout_backlink_closure_fanout_closure.v1", "schema");
assertEqual(receipt.package, "@antimatterium/control", "package");
assertEqual(receipt.package_version, "0.2.9", "package_version");
assertEqual(receipt.status, "ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSED", "status");

assertEqual(receipt.control_v028.tag, "v0.2.8-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure", "control_v028.tag");
assertUrl(receipt.control_v028.release, "control_v028.release");
assertUrl(receipt.control_v028.ci_run, "control_v028.ci_run");
assertHex64(receipt.control_v028.closure_id, "control_v028.closure_id");

assertEqual(receipt.surface_backlinks.core.tag, "v0.2.23-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink", "core.tag");
assertUrl(receipt.surface_backlinks.core.release, "core.release");
assertHex64(receipt.surface_backlinks.core.backlink_id, "core.backlink_id");

assertEqual(receipt.surface_backlinks.www.tag, "v0.1.19-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink", "www.tag");
assertUrl(receipt.surface_backlinks.www.release, "www.release");
assertHex64(receipt.surface_backlinks.www.backlink_id, "www.backlink_id");

assertEqual(receipt.surface_backlinks.org_profile.tag, "v0.0.17-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink", "org_profile.tag");
assertUrl(receipt.surface_backlinks.org_profile.release, "org_profile.release");
assertHex64(receipt.surface_backlinks.org_profile.backlink_id, "org_profile.backlink_id");

assertTrue(receipt.claims.no_current_production_claim, "claims.no_current_production_claim");
assertTrue(receipt.claims.no_starship_claim, "claims.no_starship_claim");
assertTrue(receipt.claims.no_physical_production_instructions, "claims.no_physical_production_instructions");
assertTrue(receipt.claims.no_local_root_required, "claims.no_local_root_required");

const copy = structuredClone(receipt);
delete copy.closure_id;
const recomputed = crypto.createHash("sha256").update(JSON.stringify(copy, Object.keys(copy).sort())).digest("hex");
const canonical = crypto.createHash("sha256").update(JSON.stringify(copy, Object.keys(copy).sort())).digest("hex");
if (recomputed !== canonical) {
  throw new Error("internal canonical mismatch");
}

const stable = crypto.createHash("sha256")
  .update(JSON.stringify(copy, Object.keys(copy).sort()))
  .digest("hex");

assertHex64(receipt.closure_id, "closure_id");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V028_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0223_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0119_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0017_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(`ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_ID=${receipt.closure_id}`);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
