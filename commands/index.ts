import { AbstractCommand } from "./abstract-command.ts";
import Test from "./test.ts";

const commands: { [command: string]: AbstractCommand } = {
  test: new Test(),
};

export { commands };
