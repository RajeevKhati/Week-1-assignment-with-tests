/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function formatTimeText(time) {
  if (time < 10) return `0${time}`;
  return time;
}

function parseTimeFormat(timeInMs) {
  let msec = timeInMs;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;
  return `${formatTimeText(hh)}:${formatTimeText(mm)}:${formatTimeText(
    ss
  )}:${formatTimeText(msec)}`;
}

function calculateTime(n) {
  let total = 1;
  const startTime = new Date();
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  const endTime = new Date();
  return endTime - startTime;
}

const timeTaken = calculateTime(10000000000);
const timeTakenInRequiredFormat = parseTimeFormat(timeTaken);
console.log("timeTaken => ", timeTakenInRequiredFormat);
