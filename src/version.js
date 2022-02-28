#!/usr/bin/env node

import { createRequire } from "module";
import colors from "colors";
const require = createRequire(import.meta.url);
const version = require("../package.json").version;

console.log("unnamed-cli version: ".red + version.cyan);
console.log("Created by mart-anthony-stark".red);
