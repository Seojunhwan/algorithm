const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);

if (a % 4 === 0 && (a % 100 || a % 400 === 0)) console.log("1");
else console.log("0");
