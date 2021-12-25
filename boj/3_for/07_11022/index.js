let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let index = Number(input[0]);
let result = "";
for (let i = 1; i <= index; i++) {
  const number = input[i].split(" ");
  result += `Case #${i}: ${Number(number[0])} + ${Number(number[1])} = ${
    Number(number[0]) + Number(number[1])
  }\n`;
}

console.log(result);
