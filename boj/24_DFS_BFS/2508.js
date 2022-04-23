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

let map = [];
let emptyArray = [];

const getInputs = () => {
  for (let i = 0; i < 9; i += 1) {
    map.push(input().split(" ").map(Number));
  }
};

const isValidPosition = (x, y, num) => {
  for (let i = 0; i < 9; i += 1) {
    if (map[i][y] === num || map[x][i] === num) return false; // 가로, 세로 중복된 값 있는지 확인
  }
  const [nx, ny] = [Math.floor(x / 3) * 3, Math.floor(y / 3) * 3]; // 9분면으로 나눠 작은 사각형의 시작 위치 확인
  for (let i = nx; i <= nx + 2; i += 1) {
    for (let j = ny; j <= ny + 2; j += 1) {
      if (map[i][j] === num) return false; // 작은 사각형 안에 값이 겹치는지 확인
    }
  }
  return true;
};

const dfs = (x, y, index) => {
  // 1부터 9까지 넣는 거 시작!
  for (let i = 1; i <= 9; i += 1) {
    if (!isValidPosition(x, y, i)) continue;
    map[x][y] = i; // 포지션 검증 후 값 저장
    if (emptyArray.length === index + 1) {
      printResult();
      process.exit(); // index emptyArray 마지막, 즉 모두 다 해결이 완료 됐을 때 종료
    }
    dfs(...emptyArray[index + 1], index + 1); // 다음 태스크 수행
    map[x][y] = 0; // 넣은 값이 아니면 0 으로 초기화 후 다음 값 테스트
  }
};

const solve = () => {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (map[i][j] === 0) {
        emptyArray.push([i, j]); // 찾아야 하는 칸만 emptyArray 에 저장
      }
    }
  }
  dfs(...emptyArray[0], 0); // 처음 시작할 곳 보장
};

const printResult = () => {
  map.forEach((item) => console.log(item.join(" ")));
};

const solution = () => {
  getInputs();
  solve();
};

solution();
