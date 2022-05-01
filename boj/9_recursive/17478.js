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

const repeat = Number(input());

const mainMessage = [
  '"재귀함수가 뭔가요?"',
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
  "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.",
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
];

const lastMessage = [
  '"재귀함수가 뭔가요?"',
  '"재귀함수는 자기 자신을 호출하는 함수라네"',
  "라고 답변하였지.",
];

const tab = "____";

const recursive = (i) => {
  let result = "";
  for (let j = 0; j < i; j += 1) {
    result += tab;
  }
  if (i >= repeat) {
    lastMessage.forEach((message) => {
      console.log(result + message);
    });
    return;
  } else
    mainMessage.forEach((message) => {
      console.log(result + message);
    });
  recursive(i + 1);
  console.log(result + "라고 답변하였지.");
};

const solve = () => {
  console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
  recursive(0);
};

solve();
