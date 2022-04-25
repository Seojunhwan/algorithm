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

const num = Number(input());

let range = 1;
let block = 1;

while (num > range) {
  range += block * 6;
  block += 1;
}

console.log(block);
/*
6, 12, 18, 24




n 1 = 1 - 7 = 6
n 2 = 8 - 19 = 
n 3 = 20 - 37 = 17
n 4 = 38 - 61 = 23

2n*3
58 

*/
