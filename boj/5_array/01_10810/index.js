const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const length = Number(input[0]);
const numbers = input[1].split(" ").map((number) => Number(number));

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < length; i += 1) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(`${min} ${max}`);

// 의문점
// for문 말고 Math.max, Math.min 요렇게 사용하면 더 비효율적인가?,,
// Math 두 번 돌리면 어쨌든 배열을 순환참조 하는 거 아닐까 싶기도 하구 for 문으로 돌릴 때 비교해서 값 변경해주는게 더 좋을 것 같기도 하고,,
// 뭐가 더 효율적일까?
