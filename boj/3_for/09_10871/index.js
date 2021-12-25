let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const max = Number(input[0].split(" ")[0]);
const x = Number(input[0].split(" ")[1]);
let result = "";

const targets = input[1].split(" ");

for (let i = 0; i < max; i++) {
  const target = Number(targets[i]);
  if (target < x) {
    result += `${target} `;
  }
}

console.log(result);
