import { parse } from "https://deno.land/std@0.74.0/flags/mod.ts";
import { commands } from "./commands/index.ts";
import treatHelpAsBoolOption from "./helpers/treatHelpAsBoolOption.ts";
import listShortDescriptions from "./helpers/listShortDescriptions.ts";

const commandName = Deno.args[0];

if (!commandName || commandName.startsWith("-")) {
  listShortDescriptions(commands);
} else if (!Object.keys(commands).includes(commandName)) {
  console.log("No corresponding kek found :(");
} else {
  main();
}

function main() {
  const command = commands[commandName]();
  const commandArgs = parse(Deno.args.slice(1), treatHelpAsBoolOption(command.getArgParsingOptions()));

  if (commandArgs.help) {
    command.help();
    return;
  }

  command.run(commandArgs);
}
