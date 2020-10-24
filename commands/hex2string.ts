import { AbstractCommand } from "./abstract-command.ts";
import { Args } from "https://deno.land/std@0.74.0/flags/mod.ts";

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

  run(args: Args): void {
    if (Deno.args.length < 2) {
      console.error("You have to input at least one string.");
      return;
    }
    const hexInput = Deno.args[1].toString();
    const hex = hexInput.startsWith("0x") ? hexInput.slice(2) : hexInput;
    let string = "";
    for (let i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    console.log(string);
  }
}
