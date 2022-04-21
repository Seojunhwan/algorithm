const { readFileSync } = require("fs");
const path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
const stdin = readFileSync(path).toString().trim().split("\n");

stdin.forEach((oxSet, index) => {
  if (index === 0) {
    return;
  }
  let acc = 1;
  let result = 0;
  [...oxSet].forEach((ox, index) => {
    if (ox === "O" && oxSet[index - 1] === "O") {
      result += acc;
      acc++;
    } else if (ox === "O") {
      result++;
      acc++;
    } else {
      acc = 1;
    }
  });
  console.log(result);
});
