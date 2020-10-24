import { AbstractCommand } from "./abstract-command.ts";

// command classes
import Test from "./test.ts";
import Hex2String from "./hex2string.ts";
import String2Hex from "./string2hex.ts";
import Hex2Int from "./hex2int.ts";
import Int2Hex from "./int2hex.ts";
import Base64Encode from "./base64encode.ts";
import Base64Decode from "./base64decode.ts";
import MD5 from "./md5.ts";
import SHA1 from "./sha1.ts";
import Hash from "./hash.ts";

const commands: { [command: string]: () => AbstractCommand } = Object.fromEntries(
  Object.entries({
    test: Test,
    hex2string: Hex2String,
    string2hex: String2Hex,
    hex2int: Hex2Int,
    int2hex: Int2Hex,
    base64: Base64Encode,
    base64decode: Base64Decode,
    md5: MD5,
    sha1: SHA1,
    hash: Hash,
  }).map((entry) => [entry[0], () => new entry[1](entry[0])])
);

export { commands };
