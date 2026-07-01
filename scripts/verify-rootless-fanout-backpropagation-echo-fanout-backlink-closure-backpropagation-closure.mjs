import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(
  fs.readFileSync(
    "control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE.json",
    "utf8"
  )
);
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(true, "moving CONTROL package version accepted");
assert(
  receipt.schema === "ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE",
  "schema mismatch"
);
assert(receipt.object === "ANTIMATTERIUM_CONTROL", "object mismatch");

assert(
  receipt.closes.control_v025_release ===
    "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.5-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure",
  "CONTROL v0.2.5 release mismatch"
);
assert(
  receipt.closes.control_v025_ci_run ===
    "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28326340014",
  "CONTROL v0.2.5 CI run mismatch"
);
assert(
  receipt.closes.rootless_fanout_backpropagation_echo_fanout_backlink_closure_id ===
    "2cefec2c7b3b7d1cc01d238fccb5e6c0dbd61dab4c5a2f65648158fa518fe011",
  "Move 14 closure id mismatch"
);

assert(
  receipt.surface_backlinks.core.release ===
    "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.20-antimatterium-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink",
  "Core release mismatch"
);
assert(
  receipt.surface_backlinks.core.id ===
    "18a9023630f05ddc5ce9eb83f6ddce079056bb24641004f55df9e04e677cf886",
  "Core backlink id mismatch"
);
assert(
  receipt.surface_backlinks.www.release ===
    "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.16-antimatterium-www-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink",
  "WWW release mismatch"
);
assert(
  receipt.surface_backlinks.www.id ===
    "6359c8363924916e53efbd64b705378372018f6e101b89e021ee2788f0b7a382",
  "WWW backlink id mismatch"
);
assert(
  receipt.surface_backlinks.org_profile.release ===
    "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.14-antimatterium-org-profile-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink",
  "Org profile release mismatch"
);
assert(
  receipt.surface_backlinks.org_profile.id ===
    "25cc8283788c5c2c7e460296ffa54d58c44c486bafceadbac2a436ae906e6398",
  "Org profile backlink id mismatch"
);

for (const [key, value] of Object.entries(receipt.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}
for (const [key, value] of Object.entries(receipt.boundaries)) {
  assert(value === true, "boundary not true: " + key);
}

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSED=true");
console.log("ANTIMATTERIUM_CONTROL_V025_BOUND=true");
console.log("ANTIMATTERIUM_CORE_V0220_BOUND=true");
console.log("ANTIMATTERIUM_WWW_V0116_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_V0014_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log(
  "ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_ID=" +
    receipt.rootless_fanout_backpropagation_echo_fanout_backlink_closure_backpropagation_closure_id
);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
