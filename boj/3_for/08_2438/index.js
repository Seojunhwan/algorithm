let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const index = Number(input[0]);
let star = "";

for (let i = 1; i <= index; i++) {
  let blank = "";
  for (let j = i; j < index; j++) {
    blank += " ";
  }
  star += "*";
  console.log(blank + star);
}
