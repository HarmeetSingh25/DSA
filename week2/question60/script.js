let arr = [10, 20, 30, 40, 50, 60];
const prompt = require("prompt-sync")();
const rotion = Number(prompt("Enter rotation time"));
for (let i = 1; i <= rotion; i++) {
  let first = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = first;
}

console.log(arr);
