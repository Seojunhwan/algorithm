const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const hour = parseInt(input[0]);
const minute = parseInt(input[1]);

const convertToMinutes = (hour, minutes) => {
  if (hour === 0 && minutes < 45) return 24 * 60 + minutes;
  return hour * 60 + minutes;
};

const calcTime = () => {
  const result = convertToMinutes(hour, minute) - 45;
  console.log(`${Math.floor(result / 60)} ${result % 60}`);
};

calcTime();
