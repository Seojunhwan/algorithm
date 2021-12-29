const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((number) => Number(number));

let calcResult = input[0] * input[1] * input[2];
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

while (calcResult > 0) {
  count[calcResult % 10] += 1;
  calcResult = Math.floor(calcResult / 10).toFixed();
}

for (let i = 0; i < count.length; i += 1) {
  console.log(count[i]);
}
