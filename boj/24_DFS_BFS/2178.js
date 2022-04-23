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

const [n, m] = input().split(" ").map(Number);

const map = [];
const visited = [];
const count = Array.from(Array(n), () => Array(m).fill(null));

const bfs = () => {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]; // 4개 방향 미리 지정
  const queue = [];
  visited[0][0] = true; // 가장 첫번째 블럭 방문처리
  count[0][0] = 1; // 첫번째 블럭 카운트 (문제에서 하라함 하란 말 없다면 0으로 시작)
  queue.push([0, 0]); // 첫번째부터 시작
  while (queue.length) {
    const [x, y] = queue.shift(); // 큐에서 블럭 꺼내옴
    for (let i = 0; i < 4; i += 1) {
      const [nx, ny] = [x + dir[i][0], y + dir[i][1]]; // 다음번에 갈 블럭 지정
      if (
        //다음번에 갈 블럭이
        nx < 0 || // x 혹은 y 가 0 보다 작거나 (맵 밖이거나)
        ny < 0 ||
        nx >= n || // 주어진 맵의 밖이거나
        ny >= m ||
        visited[nx][ny] === true || // 해당 블럭을 이미 방문한 적이 있거나
        map[nx][ny] === 0 // 해당 블럭이 벽이라 갈 수가 없거나
      )
        continue; // 그럴 때 continue
      count[nx][ny] = count[x][y] + 1; // 그렇다면 최소 이동거리를 기록하는 count 배열의 다음에 갈 블럭에다가 현재 블럭의 count + 1 을 저장
      visited[nx][ny] = true; // 해당 블럭은 방문한 것으로 처리
      queue.push([nx, ny]); // 큐에 푸쉬
    }
  }
};

/*
  queue 에서 꺼내와서 깐 후 다음번에 갈 곳을 for 문을 돌며 4개를 확인해본다.
  차례차례 queue 에 넣다보니 순서를 보장할 수 있음!
*/

const setMap = () => {
  for (let i = 0; i < n; i += 1) {
    map.push(input().split("").map(Number));
    visited.push(Array(m).fill(false));
  }
};

const solution = () => {
  setMap();
  bfs();
};

solution();

console.log(count[n - 1][m - 1]);
