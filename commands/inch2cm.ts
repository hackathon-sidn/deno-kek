import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Inch2CM extends AbstractCommand {
  getShortDescription(): string {
    return "Converts inch to cm.";
  }

  help(): void {
    console.log(`
    ${this.getShortDescription()}
    Expects the input to be a number without the unit.
    Decimal numbers have to use a decimal point. (E.g. 2.54)
    Returns the calculated cms as a number without the unit.

    Syntax:
      ${this.commandName} <inch>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    const cmMultiplier = 2.54;

    if (args._.length != 1) {
      console.error("You have to pass exactly one value.");
      return;
    }
    const inchInput = Number(args._[0]);
    console.log(inchInput * cmMultiplier);
  }
}
