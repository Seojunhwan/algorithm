// inputBoilerplate
const { readFileSync } = require("fs");

const stdin = readFileSync(
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
)
  .toString()
  .trim()
  .split("\n");

const input = (() => {
  let i = 0;
  return () => stdin[i++];
})();

let word = input();
const regSet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

regSet.forEach((reg) => {
  const regExp = new RegExp(reg, "gi");
  word = word.replace(regExp, "*");
});

console.log(word.length);
/*    

"c=",
"c-",
"dz=",
"d-",
"lj",
"nj",
"z="

*/
