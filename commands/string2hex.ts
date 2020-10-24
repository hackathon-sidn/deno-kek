import { AbstractCommand } from "./abstract-command.ts";
import { Args } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class String2Hex extends AbstractCommand {
  getShortDescription(): string {
    return "Converts a string to a hex value.";
  }
  help(): void {
    console.log(`
    ${this.getShortDescription()}

    Warning: This utility has a super weird behaviour!

    Syntax:
      ${this.commandName} <string>
    `);
  }
  run(args: Args): void {
    const string2: string = args._.reduce((text: string, arg: string | number) => text + arg.toString(), "");
    let hex = "0x";
    for (let i = 0; i < string2.length; i++) {
      hex += string2.charCodeAt(i).toString(16);
    }
    console.log(hex);
  }
}
