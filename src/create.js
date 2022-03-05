#!/usr/bin/env node

import inquirer from "inquirer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import templates from "./templates.js";
import cloneRepo from "./clone-template.js";
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const choices = templates.map((temp) => temp.templateName);

const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "What project template would you like to generate?",
    choices,
  },
  {
    name: "name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
];
const createProj = () => {
  inquirer.prompt(QUESTIONS).then(({ template, name }) => {
    cloneRepo(template, name);
  });
};

export default createProj;
