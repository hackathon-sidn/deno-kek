import { AbstractCommand } from "./abstract-command.ts";
import { Args } from "https://deno.land/std@0.74.0/flags/mod.ts";
import {
  createHash,
} from "https://deno.land/std@0.74.0/hash/mod.ts";

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

    const input = String(args._[0]);
    const hash = createHash("sha1")
    hash.update(input);
    console.log(hash.toString());
  }
}
