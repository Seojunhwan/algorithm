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

const n = input();
let groupWordCount = 0;

for (let i = 0; i < n; i += 1) {
  const word = input();
  let letter = [];
  let isGroupWord = true;
  [...word].forEach((alpha) => {
    if (letter.indexOf(alpha) === -1) {
      letter.push(alpha);
    } else if (letter.indexOf(alpha) !== letter.length - 1) {
      isGroupWord = false;
      return;
    }
  });
  if (isGroupWord) {
    groupWordCount += 1;
  }
}

console.log(groupWordCount);
