const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the number <--ex 434 --> ");
let tem = n;
let copy = "";
for (let i = n.length; i > 0; i--) {
  copy += tem % 10;

  tem = Math.floor(tem / 10);
}

if (n == copy) {
  console.log(`${n} is Palindrome number`);
} else {
  console.log(`${n} is Not palindrome`);
}
