import { AbstractCommand } from "./abstract-command.ts";
import { Args } from "https://deno.land/std@0.74.0/flags/mod.ts";
import { Hash, encode } from "https://deno.land/x/checksum@1.4.0/mod.ts";

export default class SHA1 extends AbstractCommand {
  getShortDescription(): string {
    return "Computes the SHA1 checksum of a given string.";
  }

  help(): void {
    const message = `
    ${this.getShortDescription()}

    Syntax:
      ${this.commandName} <string>
    `;

    console.log(message);
  }

  run(args: Args): void {
    if (args._.length != 1) {
      console.error("You have to pass exactly one string.");
      return;
    }

    const input = args._[0] as string;
    console.log(new Hash("sha1").digest(encode(input)).hex());
  }
}
