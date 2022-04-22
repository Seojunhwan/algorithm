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

const string = [...input().toUpperCase()];
const map = new Map();
let max;
let count = 0;
let maxAlpha = "";

string.forEach((alpha) => {
  if (map.has(alpha)) {
    map.set(alpha, map.get(alpha) + 1);
    return;
  }
  map.set(alpha, 1);
});

max = Math.max(...map.values());

map.forEach((item, key) => {
  if (max === item) {
    count += 1;
    maxAlpha = key;
  }
});

if (count > 1) {
  console.log("?");
} else {
  console.log(maxAlpha);
}
