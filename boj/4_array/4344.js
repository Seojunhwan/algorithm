const { readFileSync } = require("fs");

const stdin = readFileSync(
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
)
  .toString()
  .trim()
  .split("\n");

stdin.forEach((testCase, index) => {
  if (index === 0) return;
  const arr = testCase.split(" ").map((item) => Number(item));
  const n = arr[0];
  const scoreSet = arr.splice(1);
  const sumResult = scoreSet.reduce((prev, curr) => prev + curr, 0);
  const average = sumResult / n;
  console.log(
    ((scoreSet.filter((item) => item > average).length / n) * 100).toFixed(3) +
      "%"
  );
});
