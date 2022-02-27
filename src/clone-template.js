import { exec } from "child_process";
import templates from "./templates.js";
import colors from "colors";

const log = console.log;

const cloneRepo = async (template, projName) => {
  const templateRepo = templates.find(
    (t) => t.templateName === template
  ).repository;

  exec(`npx degit ${templateRepo} ${projName}`, (error, stdout, output) => {
    if (error) {
      throw error;
      return;
    }
    if (output) {
      log(`${output}`.green);
      log();
      log(`Successfully installed boilerplate`.green);
      log(`cd ${projName}`.cyan);
      log(`npm install`.cyan);
      log(`npm start`.cyan);
      return;
    }
    log(`stdout: ${stdout}`);
  });
};

export default cloneRepo;
