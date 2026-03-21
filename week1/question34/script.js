const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the number exp 123--> ");

for (let i = n.length; i>1; i--) {
  let temp = n % 10;
  n = Math.floor(n/10);
  console.log(temp);
}
