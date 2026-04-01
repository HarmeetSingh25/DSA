let fact = 1;
let count;
let sum = 0;

let odd = 0;
let even = 0;
function factorial(num) {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  if (count % 2 == 0) {
    even += fact;
  } else {
    odd += fact;
  }
  count--;
}

function isStrong(num) {
  let original = num;
  count = original.toString().length;
  while (num > 0) {
    let digit = num % 10;
    factorial(digit);
    num = Math.floor(num / 10);
  }
}
isStrong(145);
sum = odd + even;
if (sum === 145) {
  console.log("Special number");
} else {
  console.log("Not special number");
}
