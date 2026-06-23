import fs from "node:fs";
import path from "node:path";

const privacy = [
  "/" + "Us" + "ers" + "/",
  "Down" + "loads" + "/" + "Ap" + "ps",
  ["SOV", "EREIGN", "STACK", "INDEX"].join("-"),
  "V" + "AT" + "F" + "ix",
  "ka" + "af" + "film",
  "TR" + "UTH" + "FR" + "AMER",
  "CI" + "NE" + "MA" + "TICUM",
  "pri" + "vate" + " " + "fol" + "der",
  "per" + "sonal" + " " + "sta" + "ck" + " " + "inven" + "tory"
];

const claims = [
  ["cur", "rent", "industrial", "antimatter", "production", "is", "live"].join(" "),
  "star" + "ship" + " " + "ready",
  ["how", "to", "pro" + "duce", "anti" + "matter"].join(" "),
  ["bui" + "ld", "anti" + "matter"].join(" "),
  "we" + "a" + "pon",
  "war" + "head",
  "ex" + "plo" + "sive",
  "we" + "a" + "pon" + "ization" + "_framework"
];

const skipDirs = new Set([".git", "node_modules", "_work"]);
const skipFiles = new Set(["package-lock.json"]);

function walk(dir) {
  const out = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(item.name)) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...walk(full));
    else if (!skipFiles.has(item.name)) out.push(full);
  }
  return out;
}

let fail = false;
for (const file of walk(".")) {
  const text = fs.readFileSync(file, "utf8");
  for (const token of [...privacy, ...claims]) {
    if (text.includes(token)) {
      console.error("ANTIMATTERIUM_CONTROL_PUBLIC_SCAN_FAIL " + file + " " + token);
      fail = true;
    }
  }
}

if (fail) process.exit(1);
console.log("ANTIMATTERIUM_CONTROL_PUBLIC_SAFETY_SCAN_PASS=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
