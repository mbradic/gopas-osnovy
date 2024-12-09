import {
  readdirSync,
  lstatSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "fs";
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
];

const params = [process.argv[2], process.argv[3]];
const fix = params.includes("--fix");
const path = !fix ? params[0] ?? "." : getPathWhenFix(params);
console.log(`Osnovy - lint ${path}`);
if (fix) console.log("Linting and fixing: ");

let success = true;

const fileNames = readdirSync(path).filter(
  (fileName) =>
    lstatSync(fileName).isFile() && fileName.toLowerCase().endsWith(".md")
);

for (const file of fileNames) {
  for (const rule of rules)
    if (!rule.validate(file)) {
      printIssue(file, rule);
      if (fix) rule.fix(file);
      else success = false;
    }
}

if (success) console.log("All rules satisfied.");

console.log("Finished linting.");

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
