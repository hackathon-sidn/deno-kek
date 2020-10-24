import { AbstractCommand } from "./abstract-command.ts";
import { Args, ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default class Test extends AbstractCommand {
  help(): void {
    console.log("test help");
  }
  run(args: Args): void {
    console.log("test", args);
  }
}
