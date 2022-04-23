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

const currentTime = input().split(" ");
const currentHour = Number(currentTime[0]);
const currentMinutes = Number(currentTime[1]);

const cookingTime = Number(input());

const timeToMinutes = currentHour * 60 + currentMinutes;
const endHour = Math.floor(((timeToMinutes + cookingTime) / 60) % 24);
const endMinutes = (timeToMinutes + cookingTime) % 60;

console.log(endHour, endMinutes);
