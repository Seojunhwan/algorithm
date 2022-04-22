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

let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

const word = input();
let time = 0;
[...word].forEach((alpha) => {
  for (let i = 2; i <= 9; i += 1) {
    if ([...phone[i]].includes(alpha)) {
      time += i + 1;
    }
  }
});

console.log(time);
