const prompt = require("prompt-sync")({ sigint: true });
const n = Number(prompt("Enter the number "));

let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial*= i;
}
console.log(factorial);
