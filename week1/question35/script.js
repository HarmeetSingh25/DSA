const prompt = require("prompt-sync")({ sigint: true });

let n = Number(prompt("Enter the number <-- ex = 323--> "));
let temp = 0;
for (let i = n; i > 0; i--) {
  temp += n % 10;
  n = Math.floor(n / 10);
}
console.log(temp);
