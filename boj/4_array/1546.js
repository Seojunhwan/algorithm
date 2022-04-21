const { readFileSync } = require("fs");

const stdin = readFileSync(
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
)
  .toString()
  .trim()
  .split("\n");

const n = Number(stdin[0]);
const scoreSet = stdin[1].split(" ").map((item) => Number(item));
const maxScore = Math.max(...scoreSet);

const average =
  ((scoreSet.reduce((prevScore, currentScore) => prevScore + currentScore, 0) /
    maxScore) *
    100) /
  n;

console.log(average);
