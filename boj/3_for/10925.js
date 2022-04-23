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
const arr = [input().split(" ").map(Number)];
for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i][0] + arr[i][1]);
  arr.push(input().split(" ").map(Number));
  if (arr[arr.length - 1][0] === 0) break;
}
