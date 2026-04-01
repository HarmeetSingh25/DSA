let n = 123;
let Number1 = n.toString();

console.log(Number1[0]);

let single = 0;

const digits = Array.from(n.toString(), Number);

// let t = 10

let arr = [];

for (let i = 0; i <= Number1.length - 1; i++) {
  single = digits[i];

  //   console.log(single);

  let total = 1;

  for (let j = 1; j <= single; j++) {
    total *= j;

    // console.log(total);
  }

  arr.push(total);
}
let result = 0;
arr.map((num) => {
  result += num;
});
if (result == n) {
  console.log(`So ${n} is Strong Number`);
} else {
  console.log("Not strong");
}
