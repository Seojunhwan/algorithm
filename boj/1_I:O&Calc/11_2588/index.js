const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const first_line = a * (b % 10);
const second_line = a * Math.floor((b / 10) % 10);
const third_line = a * Math.floor((b / 100) % 10);

console.log(first_line);
console.log(second_line);
console.log(third_line);
console.log(first_line + second_line * 10 + third_line * 100);
