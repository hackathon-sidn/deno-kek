import { AbstractCommand } from "./abstract-command.ts";

// command classes
import Test from "./test.ts";

const commands: { [command: string]: () => AbstractCommand } = Object.fromEntries(
  Object.entries({
    test: Test,
  }).map((entry) => [entry[0], () => new entry[1](entry[0])])
);

export { commands };
