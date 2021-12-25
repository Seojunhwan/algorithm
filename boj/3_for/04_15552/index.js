let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const max = Number(input[0]);
let result = "";
for (let i = 1; i <= max; i++) {
  let number = input[i].split(" ");
  result += Number(number[0]) + Number(number[1]) + "\n";
}

console.log(result);
