import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";

export default function list(params, switches) {
  const path = params[0] ?? ".";
  console.log(`Osnovy - list ${path}`);

  const lang = switches.lang ?? "CZ";
  console.log(`Filtering for language: ${lang}`);

  const { out } = switches;
  if (out) console.log(`Writing output to file: ${out}`);

  const fileNames = readdirSync(path).filter(
    (fileName) =>
      lstatSync(fileName).isFile() &&
      fileName.toLowerCase().endsWith(`${lang.toLowerCase()}.md`)
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
  if (out) writeFileSync(out, JSON.stringify(courses));
  console.table(courses);
  console.log(`Finished listing ${path}`);
}
