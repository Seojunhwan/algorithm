let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

i = Number(input[0]);
let result = 0;
for (let num = 1; num <= i; num++) {
  result += num;
}
console.log(result);
