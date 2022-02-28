#!/usr/bin/env node

import { argv } from "process";
import { createRequire } from "module";
import colors from "colors";
const require = createRequire(import.meta.url);
const version = require("../package.json").version;

const flag = argv[2];
if (flag === "-v" || flag === "--version") {
  console.log("unnamed-cli version: ".red + version.cyan);
  console.log("Created by mart-anthony-stark".red);
} else {
  console.log(`Unknown flag: ${flag}`.red);
  console.log("unnamed-cli [flag]".cyan);
  console.log("-v             returns cli version".blue);
  console.log("-version       returns cli version".blue);
}
