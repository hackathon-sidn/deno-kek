import { parse } from "https://deno.land/std@0.74.0/flags/mod.ts";

const command = Deno.args[0];
if (!command || typeof command !== "string" || command.startsWith("-")) {
  console.log("kek");
} else {
  main();
}

function main() {
  const options = {};
  const commandArguments = parse(Deno.args.slice(1), options);

  console.log(command, commandArguments);
}
