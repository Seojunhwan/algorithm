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
let count = 0;

const check = (number) => {
  const numberArr = Array.from(String(number), Number); // arr 로 변환
  if (numberArr.length < 3) {
    count += 1;
    return;
  }
  if (numberArr[0] - numberArr[1] === numberArr[1] - numberArr[2]) {
    count += 1;
  }
};

for (let i = 1; i <= n; i += 1) {
  check(i);
}

console.log(count);
