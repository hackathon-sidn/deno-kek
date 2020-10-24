import { AbstractCommand } from "./abstract-command.ts";

// command classes
import Test from "./test.ts";
import Hex2String from "./hex2string.ts";
import String2Hex from "./string2hex.ts";
import MD5 from "./md5.ts";
import SHA1 from "./sha1.ts";

const commands: { [command: string]: () => AbstractCommand } = Object.fromEntries(
  Object.entries({
    test: Test,
    hex2string: Hex2String,
    string2hex: String2Hex,
    md5: MD5,
    sha1: SHA1,
  }).map((entry) => [entry[0], () => new entry[1](entry[0])])
);

export { commands };
