import { readdirSync, readFileSync, renameSync, writeFileSync } from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const languageCodes = ["CZ", "EN"];

const rules = [
  {
    id: 1,
    description: "All file names must end with space, followed by CZ or EN.",
    level: "error",
    validate: (fileName) => {
      const name = fileName.split(".")[0];
      const nameParts = name.split(" ");
      if (nameParts.length < 2) return false;
      const languageCode = nameParts[nameParts.length - 1];
      return languageCodes.includes(languageCode);
    },
    fix: (fileName) => {
      for (let i = 0; i < languageCodes.length; i++) {
        console.log(
          `Press ${i + 1} to add ${
            languageCodes[i]
          } to the end of the filename.`
        );
      }
      console.log(
        "Press any other key to skip fixing this file and continue linting."
      );
      rl.question("?> ", (answer) => {
        const fixAnswers = [languageCodes.map((_, index) => `${index + 1}`)];
        if (fixAnswers.includes(answer)) {
          const languageCode = languageCodes[+answer - 1];
          renameSync(fileName, fileName.trim() + " " + languageCode);
        }
      });
    },
  },
  {
    id: 2,
    description:
      "First line of each file must start with #, followed by space.",
    level: "error",
    validate: (fileName) => {
      const content = readFileSync(fileName, { encoding: "utf-8" });
      return content.startsWith("# ");
    },
    fix: (fileName) => {
      const content =
        "# " + readFileSync(fileName, { encoding: "utf-8" }).trim();
      writeFileSync(fileName, content);
    },
  },
  {
    id: 3,
    description: "Course title must not contain trailing spaces.",
    level: "error",
    validate: (fileName) => {
      const content = readFileSync(fileName, { encoding: "utf-8" });
      const firstLine = content.split("\r\n")[0];
      return !firstLine.endsWith(" ");
    },
    fix: (fileName) => {
      const content = readFileSync(fileName, { encoding: "utf-8" });
      const lines = content.split("\r\n");
      lines[0] = lines[0].trim();
      writeFileSync(fileName, lines.join("\r\n"));
    },
  },
];

const path = process.argv[2].startsWith("--") ? "." : argv[2];
console.log(`Osnovy - lint ${path}`);

const fixParamIndex = process.argv.findIndex((a) => a === "--fix");
const fix = fixParamIndex > -1;

if (fix) console.log("Linting and fixing: ");
else console.log("Linting:");

let success = true;

const fileNames = readdirSync(path).filter((fileName) =>
  fileName.toLowerCase().endsWith(".md")
);

for (const file of fileNames) {
  for (const rule of rules)
    if (!rule.validate(file)) {
      if (fix) {
        rule.fix(file);
        printFix(file, rule);
      } else {
        success = false;
        printIssue(file, rule);
      }
    }
}

if (success) console.log("All rules satisfied.");

if (fix) console.log("Finished linting and fixing.");
else console.log("Finished linting.");

rl.close();

function getPathWhenFix(params) {
  return params[0] === "--fix" ? params[1] : params[0];
}

function printIssue(fileName, rule) {
  console.log(
    `${rule.level.toUpperCase()}: File ${fileName} violating rule ${rule.id}: ${
      rule.description
    }`
  );
}

function printFix(fileName, rule) {
  console.log(
    `FIXED: File ${fileName} violating rule ${rule.id}: ${rule.description}`
  );
}
