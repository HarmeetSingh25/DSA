const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the number <--ex 223 -->");
let temp = "";
for (let i = n.length; i > 0; i--) {
  temp += n % 10;
  n = Math.floor(n / 10);
}
console.log(Number(temp));
