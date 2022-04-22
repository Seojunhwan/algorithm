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

const word = input();

let result = "";
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i += 1) {
  result = result + word.indexOf(String.fromCharCode(i)) + " ";
}
console.log(result.trim());
