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

const n = Number(input());

const arr = Array(n);
arr[0] = 1;
arr[1] = 1;
for (let i = 2; i <= n; i += 1) {
  arr[i] = (arr[i - 2] + arr[i - 1]) % 15746;
}

console.log(arr[n] % 15746);
