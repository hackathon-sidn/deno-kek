import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Int2Hex extends AbstractCommand {
  getShortDescription(): string {
    return "Converts integer to hex.";
  }

  help(): void {
    console.log(`
    ${this.getShortDescription()}

    Syntax:
      ${this.commandName} <integer>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    if (args._.length != 1) {
      console.error("You have to pass exactly one integer.");
      return;
    }
    const integer = Number(args._[0]);
    console.log(integer.toString(16));
  }
}
