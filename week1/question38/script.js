const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Enter the number <-- ex 321 -->");
let copy = Number(n);
let total = 0;
let arr = [];
let digit = 0;
for (let i = n.length; i > 0; i--) {
    let temp = 1;
  digit = copy % 10;
  copy = Math.floor(copy / 10);

  for (let j = digit; j >0; j--) {
    temp *= j;
  }
  arr.push(temp);
}
for (let i = 0; i < arr.length ; i++) {
  total += arr[i];
}
if (total == n) {
  console.log(`totoal = ${total} n = ${n} this is   strong`);
} else {
  console.log(`totoal = ${total} n = ${n} this is not  strong`);
}
console.log(arr);
