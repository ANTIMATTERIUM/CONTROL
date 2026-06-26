import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE", "schema mismatch");
assert(r.control_version === "0.2.2", "version mismatch");
assert(r.closes === "ROOTLESS_FANOUT_ECHO_BACKPROPAGATION", "closure target mismatch");

assert(r.upstream_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.1-antimatterium-control-rootless-fanout-echo-closure", "control release mismatch");
assert(r.upstream_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28190185370", "control ci run mismatch");
assert(r.upstream_control.rootless_fanout_echo_closure_id === "39110d1cf58cedbfc54624d89a8e536e5d40f76821e18dd02d8ae615b9afb1a1", "control closure id mismatch");

assert(r.surface_backlinks.core.release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.16-antimatterium-rootless-fanout-echo-backlink", "core release mismatch");
assert(r.surface_backlinks.core.core_rootless_fanout_echo_backlink_id === "d19eda934cb909a0e4d928990c67fb21838d374e1570a9d8004f67ab0d4db93e", "core backlink id mismatch");

assert(r.surface_backlinks.www.release === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.12-antimatterium-www-rootless-fanout-echo-backlink", "www release mismatch");
assert(r.surface_backlinks.www.www_rootless_fanout_echo_backlink_id === "7ed61fd7bd24ebe51c1106e2de1220f9fc9cb8ff8fb4e81e253a18fd026bc2db", "www backlink id mismatch");

assert(r.surface_backlinks.org_profile.release === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.10-antimatterium-org-profile-rootless-fanout-echo-backlink", "org profile release mismatch");
assert(r.surface_backlinks.org_profile.org_profile_rootless_fanout_echo_backlink_id === "ef72ad681fa8c3d050f238d9976e637902277ed3b54daa6df3f7f6b573fd82e3", "org profile backlink id mismatch");

for (const [key, value] of Object.entries(r.closure)) assert(value === true, "closure field not true: " + key);
for (const [key, value] of Object.entries(r.boundaries)) assert(value === true, "boundary field not true: " + key);

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V021_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0216_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0112_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0010_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_ID=" + r.rootless_fanout_backlink_closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
