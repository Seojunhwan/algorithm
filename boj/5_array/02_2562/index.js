const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const numbers = input.map((number) => Number(number));

let max = {
  number: numbers[0],
  index: 0,
};

for (let i = 0; i < 9; i += 1) {
  if (max.number < numbers[i]) {
    max.number = numbers[i];
    max.index = i + 1;
  }
}
console.log(`${max.number}\n${max.index}`);
