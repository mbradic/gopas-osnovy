import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";

const path = process.argv[2].startsWith("--") ? "." : argv[2];
console.log(`Osnovy - list ${path}`);

let language = "CZ";
const languageParamIndex = process.argv.findIndex((a) => a == "--language");
if (languageParamIndex > -1) language = argv[languageParamIndex + 1];
console.log(`Filtering for language: ${language}`);

let writeToFile = "";
const outParamIndex = process.argv.findIndex((a) => a === "--out");
if (outParamIndex > -1) writeToFile = process.argv[outParamIndex + 1];
if (writeToFile) console.log(`Writing output to file: ${writeToFile}`);

const fileNames = readdirSync(path).filter(
  (fileName) =>
    lstatSync(fileName).isFile() &&
    fileName.toLowerCase().endsWith(`${language.toLowerCase()}.md`)
);

const courses = [];
for (const fileName of fileNames) {
  const [name] = fileName.split(".");
  const [courseCode] = name.split(" ");
  const content = readFileSync(fileName, { encoding: "utf-8" });
  const courseName = content
    .split("\r\n")[0]
    .substring(2)
    .split(" ")
    .slice(2)
    .join(" ");
  courses.push({ code: courseCode, name: courseName });
}
if (writeToFile) writeFileSync(writeToFile, JSON.stringify(courses));
console.table(courses);
console.log(`Finished listing ${path}`);
