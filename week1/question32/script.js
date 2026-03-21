const prompt = require("prompt-sync")({ sigint: true });

const n = Number(prompt("Enter the number"));
let isprime = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    isprime++;
  }
}
if (isprime == 2) {
  console.log(`${n} is prime`);
} else {
  console.log(`${n} is not prime`);
}
