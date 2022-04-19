const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const numbers = input.map((number) => Number(number));

let maxNumber = numbers[0];
let maxIndex = 0;

for (let i = 0; i < 9; i += 1) {
  if (maxNumber < numbers[i]) {
    maxNumber = numbers[i];
    maxIndex = i;
  }
}
console.log(`${maxNumber}\n${maxIndex + 1}`);

// 풀이 2
// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().split("\n");
// const numbers = input.map((number) => Number(number));

// const max = Math.max(...numbers);

// console.log(`${max}\n${numbers.indexOf(max) + 1}`);
