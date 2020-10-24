import { ArgParsingOptions } from "https://deno.land/std@0.74.0/flags/mod.ts";

export default function treatHelpAsBoolOption(options: ArgParsingOptions): ArgParsingOptions {
  if (options.boolean !== true) {
    if (!options.boolean) {
      options.boolean = "help";
    } else if (typeof options.boolean === "string") {
      options.boolean = [options.boolean, "help"];
    } else if (typeof options.boolean === "object" && Array.isArray(options.boolean)) {
      options.boolean.push("help");
    }
  }
  return options;
}
