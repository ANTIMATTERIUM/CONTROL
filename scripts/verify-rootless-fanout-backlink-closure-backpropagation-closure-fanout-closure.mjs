import fs from "node:fs";
import crypto from "node:crypto";

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receiptPath = "control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(/^0\.2\.(7|[8-9]|[1-9][0-9]+)$/.test(pkg.version), "package version mismatch");

assert(receipt.closes.control_v026_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure", "CONTROL v0.2.6 release mismatch");
assert(receipt.closes.control_v026_tag === "v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure", "CONTROL v0.2.6 tag mismatch");
assert(receipt.closes.control_v026_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327289926", "CONTROL v0.2.6 CI run mismatch");
assert(receipt.closes.rootless_fanout_backpropagation_echo_fanout_backlink_closure_backpropagation_closure_id === "831c663f39d9d5151c5e56e16f5565406f7059624c030ba527f8a48afdd24386", "CONTROL v0.2.6 closure id mismatch");

assert(receipt.fanout_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.21-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-backlink", "Core release mismatch");
assert(receipt.fanout_backlinks.core.backlink_id === "42b2cc4852eae0a29b81f328919684c9e83a661bf502c7d9b03087ff577eeb6a", "Core backlink id mismatch");

assert(receipt.fanout_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.17-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-backlink", "WWW release mismatch");
assert(receipt.fanout_backlinks.www.backlink_id === "8e2e70ee4d53d7512668189b51571ea927e53b3cd99d4fab390f389187b54fa5", "WWW backlink id mismatch");

assert(receipt.fanout_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.15-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-backlink", "Org profile release mismatch");
assert(receipt.fanout_backlinks.org_profile.backlink_id === "2c054a7d1c8415442b4223adee10c3d0a87820d77a4e842c3b85592abadc8049", "Org profile backlink id mismatch");

assert(receipt.acceptance.control_v026_bound === true, "CONTROL v0.2.6 not bound");
assert(receipt.acceptance.core_v0221_bound === true, "Core v0.2.21 not bound");
assert(receipt.acceptance.www_v0117_bound === true, "WWW v0.1.17 not bound");
assert(receipt.acceptance.org_profile_v0015_bound === true, "Org profile v0.0.15 not bound");
assert(receipt.acceptance.move17_fanout_closed === true, "Move 17 fanout not closed");
assert(receipt.acceptance.no_local_root_required === true, "local root dependency present");

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "production claim boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship claim boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

const clone = JSON.parse(JSON.stringify(receipt));
delete clone.rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_id;
const expected = crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
assert(receipt.rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_id === expected, "closure id mismatch");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V026_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0221_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0117_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0015_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(`ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_ID=${receipt.rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_id}`);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
