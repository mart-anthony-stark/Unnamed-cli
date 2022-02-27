import { exec } from "child_process";
import templates from "./templates.js";

const cloneRepo = async (template, projName) => {
  const templateRepo = templates.find(
    (t) => t.templateName === template
  ).repository;

  const command = await exec(`npx degit ${templateRepo} ${projName}`);
  console.log(command);
};

export default cloneRepo;
