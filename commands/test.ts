import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Test extends AbstractCommand {
  getShortDescription(): string {
    return "This command is for testing this deno module.";
  }

  help(): void {
    const message = `
    ${this.getShortDescription()}

    ${this.commandName} simply responds with the given command line arguments.
    This way you can check if the alias settings are correct and see how we implemented them.
    `;

    console.log(message);
  }

  run(args: Args): void {
    console.log("test", args);
  }
}
