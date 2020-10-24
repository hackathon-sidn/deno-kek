import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export abstract class AbstractCommand {
  /**
   * Outputs the help message.
   */
  abstract help(): void;

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
