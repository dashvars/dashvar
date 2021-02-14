const package = require("./package.json");
let packageExtension = require("./vs-code-dashvar-snippets/package.json");

packageExtension.version = package.version;

const path = require("path");
const fs = require("fs");

fs.writeFileSync(
  path.join(__dirname, "vs-code-dashvar-snippets", "package.json"),
  JSON.stringify(packageExtension, null, 2)
);
