const { readFileSync } = require("fs");

const stdin = readFileSync(
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
)
  .toString()
  .trim()
  .split("\n");

const rest = stdin.map((item) => item % 42);
const set = new Set(rest);

console.log(set.size);
