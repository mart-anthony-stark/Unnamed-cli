import { exec } from "child_process";
import templates from "./templates.js";
import colors from "colors";
import Loader from "./loader.js";

const log = console.log;
const loader = new Loader();

const cloneRepo = async (template, projName) => {
  loader.startLoading();
  const templateRepo = templates.find(
    (t) => t.templateName === template
  ).repository;

  exec(`npx degit ${templateRepo} ${projName}`, (error, stdout, output) => {
    if (error) {
      throw error;
    }
    loader.stopLoading();
    if (output) {
      log(`${output}`.green);
      log();
      log(`Successfully installed boilerplate!`.green);
      log("\tTo get started:".blue);
      log(`\t\tcd ${projName}`.cyan);
      log(`\t\tnpm install`.cyan);
      log(`\t\tnpm start`.cyan);
    }
  });
};

export default cloneRepo;
