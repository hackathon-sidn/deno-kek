import { parse } from "https://deno.land/std@0.74.0/flags/mod.ts";
import { commands } from "./commands/index.ts";

const command = Deno.args[0];
if (!command || command.startsWith("-")) {
  console.log("kek");
} else if (!Object.keys(commands).includes(command)) {
  console.log("kekedi kek");
} else {
  main();
}

async function main() {
  const commandArgs = parse(Deno.args.slice(1), commands[command].getArgParsingOptions());
  commands[command].run(commandArgs);
}
