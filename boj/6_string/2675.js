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

const T = input();

for (let i = 0; i < T; i += 1) {
  const row = input().split(" ");
  const R = row[0];
  const string = [...row[1]];
  let result = "";
  string.forEach((alpha) => {
    result += alpha.repeat(R);
  });
  console.log(result);
}
