const prompt = require("prompt-sync")({ sigint: true });

const n = Number(prompt("Enter the number "));
let sum = 0;

for (let i = 1; i < n; i++) {
  if (n % i == 0) {
    sum += i;
  }
}
console.log(sum);
