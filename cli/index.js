import list from "./list.js";
import lint from "./lint.js";

const [command, ...rest] = process.argv.slice(2);

if (!command) {
  printError(
    "No command supplied. You can find documentation at https://github.com/mbradic/gopas-osnovy/blob/main/cli/readme.md"
  );
}

const params = [];
const switches = {};

let i = 0;
while (i < rest.length) {
  if (!rest[i].startsWith("--")) {
    params.push(rest[i]);
    i++;
    continue;
  }

  if (
    (i + 1 < rest.length && rest[i + 1].startsWith("--")) ||
    i == rest.length
  ) {
    switches[rest[i].slice(2)] = true;
    i++;
    continue;
  }

  switches[rest[i].slice(2)] = rest[i + 1];
  i += 2;
}

switch (command) {
  case "lint":
    lint(params, switches);
    break;
  case "list":
    list(params, switches);
    break;
  default:
    printError("Unknown command: " + command + ".");
    break;
}
