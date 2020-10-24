import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Base64Encode extends AbstractCommand {
  getShortDescription(): string {
    return "Converts the provided string to base64.";
  }

  help(): void {
    console.log(`
    ${this.getShortDescription()}

    Syntax:
      ${this.commandName} <string>
    `);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return { string: "_" };
  }

  run(args: Args): void {
    const string: string = args._.reduce((text: string, arg: string | number) => text + arg.toString(), "");
    console.log(btoa(string));
  }
}
