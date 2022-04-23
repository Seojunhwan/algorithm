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

let T = Number(input());
let row;
let col;
let map;
let visited;
let ret;

const getInput = () => {
  const temp = input().split(" ").map(Number);
  row = temp[0];
  col = temp[1];
  cnt = temp[2];
  map = Array.from(Array(row), () => Array(col).fill(0));
  visited = Array.from(Array(row), () => Array(col).fill(false));
  ret = 0;
  for (let i = 0; i < cnt; i += 1) {
    const [x, y] = input().split(" ").map(Number);
    map[y][x] = 1;
  }
};

const dfs = (x, y) => {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  visited[x][y] = true;
  for (let i = 0; i < 4; i += 1) {
    const [nx, ny] = [x + dir[i][0], y + dir[i][1]]; // 다음 포지션 확인
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= col ||
      ny >= row ||
      visited[nx][ny] ||
      map[nx][ny] === 0
    )
      continue;
    dfs(nx, ny); // 전체탐색
  }
};

const solve = () => {
  for (let i = 0; i < col; i += 1) {
    for (let j = 0; j < row; j += 1) {
      if (map[i][j] === 1 && !visited[i][j]) {
        // 모든 칸 확인, 배추가 심어진 블럭이며, 해당 블럭 방문한 적 없다면 dfs 실행
        ret++;
        dfs(i, j);
        // 끝나면 다른 블럭 확인, 배추 심어진 섬을 찾는다고 생각하면 이해가 쉬움
      }
    }
  }
};

while (T--) {
  getInput();
  solve();
  console.log(ret);
}
