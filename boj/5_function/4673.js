const range = 10000;

const map = new Map();
for (let i = 1; i < range; i++) {
  map.set(i, true);
}

const d = (n) => {
  let number = n;
  let result = 0;
  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return n + result;
};

for (let i = 0; i < range; i++) {
  map.set(d(i), false);
}

for (let i = 1; i < range; i++) {
  if (map.get(i)) console.log(i);
}
