import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export abstract class AbstractCommand {
  constructor (protected commandName: string) {}

  /**
   * Outputs the help message.
   */
  abstract help(): void;

  /**
   * Returns a one-liner to describe the program's purpose.
   */
  abstract getShortDescription(): string;

  /**
   * Returns the argument parsing options required for the run function.
   */
  getArgParsingOptions(): ArgParsingOptions {
    return {};
  }

  /**
   * Executes the command.
   * @param {Args} args
   */
  abstract run(args: Args): void;
}
