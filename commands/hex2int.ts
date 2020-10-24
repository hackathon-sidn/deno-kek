import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Hex2Int extends AbstractCommand {
  getShortDescription(): string {
    return "Converts hex to integer.";
  }

  help(): void {
    console.log(`
    ${this.getShortDescription()}

    Syntax:
      ${this.commandName} <hex>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    if (args._.length != 1) {
      console.error("You have to pass exactly one hex value.");
      return;
    }
    try {
      const hexInput = args._[0].toString();
      const hex = hexInput.startsWith("0x") ? hexInput : "0x" + hexInput;
      const integer = Number(hex);
      if (isNaN(integer)) throw new Error();
      console.log(integer.toString());
    } catch {
      console.log("Not a valid hex value.");
    }
  }
}
