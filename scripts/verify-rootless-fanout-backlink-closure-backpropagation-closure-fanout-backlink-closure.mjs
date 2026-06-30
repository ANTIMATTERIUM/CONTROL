import fs from "node:fs";
import crypto from "node:crypto";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

function digest(value) {
  return crypto.createHash("sha256").update(JSON.stringify(stable(value))).digest("hex");
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const receipt = JSON.parse(fs.readFileSync("control/ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE.json", "utf8"));

assert(pkg.name === "@antimatterium/control", "package name mismatch");
assert(["0.2.8", "0.2.9", "0.2.10", "0.2.11", "0.2.12"].includes(pkg.version), "package version mismatch");
assert(receipt.package.name === "@antimatterium/control", "receipt package name mismatch");
assert(receipt.package.version === "0.2.8", "receipt package version mismatch");

const clone = structuredClone(receipt);
const id = clone.id;
delete clone.id;
assert(id === digest(clone), "receipt id mismatch");

assert(receipt.closure.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.7-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure", "control release mismatch");
assert(receipt.closure.control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327734001", "control ci mismatch");
assert(receipt.closure.control_closure_id === "755c0844bc9bd8c3194e1fc02bc1254e9b6a0c5cefb79d21bb5ae6d0b1e5baa1", "control closure id mismatch");

const expected = new Map([
  ["core", {
    release: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.22-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink",
    backlink_id: "04cc333c78c0342594b6809f638ba855da99a6cd36c50c86596ff50f7c0a8d61"
  }],
  ["www", {
    release: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.18-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink",
    backlink_id: "1f02f05b5321a32442cb8af4a2c4e27b7aacbadbaef543619386feed136f1af3"
  }],
  ["org_profile", {
    release: "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.16-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink",
    backlink_id: "03e405c1d7d240f63225dfb09e1c27e8c35959e1ccc3e86cc1db269aabab10cd"
  }]
]);

assert(receipt.surface_backlinks.length === expected.size, "surface backlink count mismatch");

for (const item of receipt.surface_backlinks) {
  const expectedItem = expected.get(item.surface);
  assert(expectedItem, `unexpected surface ${item.surface}`);
  assert(item.release === expectedItem.release, `${item.surface} release mismatch`);
  assert(item.backlink_id === expectedItem.backlink_id, `${item.surface} backlink id mismatch`);
  assert(item.verify_script === "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure", `${item.surface} verify script mismatch`);
}

assert(receipt.assertions.move19_surface_backlinks_bound === true, "move19 surface backlinks not bound");
assert(receipt.assertions.rootless_fanout_backlink_closure_backpropagation_closure_fanout_backlink_closed === true, "fanout backlink closure not closed");
assert(receipt.assertions.no_local_root_required === true, "local root required");
assert(receipt.assertions.no_current_production_claim === true, "current production claim present");
assert(receipt.assertions.no_starship_claim === true, "starship claim present");
assert(receipt.assertions.no_physical_production_instructions === true, "physical production instructions present");

console.log("ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSED=true");
console.log("ANTIMATTERIUM_MOVE19_SURFACE_BACKLINKS_BOUND=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_ID=" + receipt.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
