import { exec } from "child_process";
import templates from "./templates.js";

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
      console.log(`output: ${output}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

export default cloneRepo;
