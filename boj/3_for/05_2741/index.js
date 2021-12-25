let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = Number(input[0]);
let result = "";
for (let i = 1; i <= max; i++) {
  result += i + "\n";
}
console.log(result);
