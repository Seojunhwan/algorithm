const { readFileSync } = require("fs");

const stdin = readFileSync(
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
)
  .toString()
  .trim()
  .split("\n");

const input = (() => {
  let i = 0;
  return () => stdin[i++];
})();

const [first, second, third] = input().split(" ").map(Number);
const set = new Set();
set.add(first);
set.add(second);
set.add(third);
if (set.size === 1) {
  console.log(10000 + first * 1000);
} else if (set.size === 2) {
  if (first === second) console.log(1000 + first * 100);
  else console.log(1000 + third * 100);
} else console.log(Math.max(first, second, third) * 100);
