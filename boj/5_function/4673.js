const range = 10000;

const result = new Array(range).fill(true);

const d = (n) => {
  let num = n;
  let result = n;
  for (let i = 0; i < String(n).length; i += 1) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
};

for (let i = 1; i < range; i += 1) {
  result[d(i)] = false;
}

for (let i = 1; i < range; i += 1) {
  if (result[i]) {
    console.log(i);
  }
}
