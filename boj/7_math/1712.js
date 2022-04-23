// inputBoilerplate
const { readFileSync } = require("fs");
const { exit } = require("process");

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

const temp = input().split(" ");

const fixedCost = Number(temp[0]);
const variableCost = Number(temp[1]);
const productPrice = Number(temp[2]);

if (variableCost >= productPrice) {
  console.log(-1);
} else {
  console.log(Math.floor(fixedCost / (productPrice - variableCost)) + 1);
}
