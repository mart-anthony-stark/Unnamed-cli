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
      log(`cd ${projName}`.cyan);
      log(`npm install`.cyan);
      log(`npm start`.cyan);
    }
  });
};

export default cloneRepo;
