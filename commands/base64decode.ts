import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Hex2String extends AbstractCommand {
  getShortDescription(): string {
    return "Decodes a base64 encoded string.";
  }
  help(): void {
    console.log(`
    ${this.getShortDescription()}

    Syntax:
      ${this.commandName} <base64string>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    if (args._.length != 1) {
      console.error("You have to pass exactly one string.");
      return;
    }
    try {
      const decodedString = atob(args._[0].toString());
      console.log(decodedString);
    } catch {
      console.log("The provided string is not a valid base64 string");
    }
  }
}
