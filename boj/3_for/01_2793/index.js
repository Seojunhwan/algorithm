const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const data = parseInt(input[0]);

for (let index = 1; index <= 9; index++) {
  console.log(`${data} * ${index} = ${data * index}`);
}
