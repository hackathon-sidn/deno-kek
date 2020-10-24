import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class CM2Inch extends AbstractCommand {
  getShortDescription(): string {
    return "Converts cm to inch.";
  }

  help(): void {
    console.log(`
    ${this.getShortDescription()}
    Expects the input to be a number without the unit.
    Decimal numbers have to use a decimal point. (E.g. 2.54)
    Returns the calculated inches as a number without the unit.

    Syntax:
      ${this.commandName} <cm>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    const inchDivider = 2.54;

    if (args._.length != 1) {
      console.error("You have to pass exactly one value.");
      return;
    }
    const cmInput = Number(args._[0]);
    console.log(cmInput / inchDivider);
  }
}
