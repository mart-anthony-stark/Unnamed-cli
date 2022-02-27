#!/usr/bin/env node

import inquirer from "inquirer";
import { dirname } from "path";
import { fileURLToPath } from "url";
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);
