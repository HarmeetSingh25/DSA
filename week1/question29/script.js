const prompt = require("prompt-sync")({ sigint: true });
const n = Number(prompt("Enter the number "));
let even = 0;
let odd = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}
console.log("EVEN", even);
console.log("ODD", odd);

