import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Hex2String extends AbstractCommand {
  getShortDescription(): string {
    return "Converts a hex value to a string.";
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
      console.error("You have to pass exactly one string.");
      return;
    }
    const hexInput = args._[0].toString();
    const hex = hexInput.startsWith("0x") ? hexInput.slice(2) : hexInput;
    let string = "";
    for (let i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    console.log(string);
  }
}
