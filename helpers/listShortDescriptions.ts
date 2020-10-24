import { AbstractCommand } from "../commands/abstract-command.ts";

export default function listShortDescriptions(commands: { [command: string]: () => AbstractCommand }): void {
  let text = "List of commands and their description:\n\n";

  const commandNameMaxLength = Math.max(...Object.keys(commands).map((command) => command.length));
  for (const [commandName, getCommandInstance] of Object.entries(commands)) {
    text += `  ${commandName}: ${" ".repeat(
      commandNameMaxLength - commandName.length
    )}${getCommandInstance().getShortDescription()}\n`;
  }

  text += `\nSyntax:\n  deno run https://deno.land/x/kek/mod.ts <command>\n`;

  console.log(text);
}
