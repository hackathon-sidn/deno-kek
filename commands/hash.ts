import { AbstractCommand } from "./abstract-command.ts";
import {
  ArgParsingOptions,
  Args,
} from "https://deno.land/std@0.74.0/flags/mod.ts";
import {
  createHash,
  SupportedAlgorithm,
} from "https://deno.land/std@0.74.0/hash/mod.ts";

export default class Hash extends AbstractCommand {
  getShortDescription(): string {
    return "Computes the hash of a given string. See --help to see all supported hash algorithms.";
  }

  help(): void {
    const message = `
    Computes the hash of a given string.

    Following hash algorithms are supported:

      - md2
      - md4
      - md5
      - ripemd160
      - ripemd320
      - sha1
      - sha224
      - sha256
      - sha384
      - sha512
      - sha3-224
      - sha3-256
      - sha3-384
      - sha3-512
      - keccak224
      - keccak256
      - keccak384
      - keccak512

    Syntax:

      Returns an hex-encoded hash of the given string. 
      ${this.commandName} --type=<algorithm> <string>

      Returns an base64-encoded hash of the given string.
      ${this.commandName} --base64 --type=<algorithm> <string>
    `;

    console.log(message);
  }

  getArgParsingOptions(): ArgParsingOptions {
    return {
      boolean: [
        "base64",
      ],
    };
  }

  run(args: Args): void {
    if (args._.length != 1) {
      console.error("You have to pass exactly one string.");
      return;
    }

    if (!args.type) {
      console.error("You have to specify the hash algorithm.");
      return;
    }

    const input = String(args._[0]);
    const algorithm = args.type as SupportedAlgorithm;

    try {
      const hash = createHash(algorithm);
      hash.update(input);

      if (args.base64) {
        console.log(hash.toString("base64"));
      } else {
        console.log(hash.toString());
      }
    } catch (error) {
        console.log(error)
    }
  }
}
