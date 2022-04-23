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

const number = Number(input());

const origin = number < 10 ? number * 10 : number;

let result = 0;
let temp = origin;
let ten;
let one;

while (1) {
  ten = Math.floor(temp / 10);
  one = temp % 10;
  temp = one * 10 + ((ten + one) % 10);
  result += 1;
  if (temp === origin) break;
}
console.log(result);
