let num = 2932;
const numberArray = Array.from(String(num), Number);
numberArray.sort((a, b) => a - b);
let left = 0;
let right = 0;
for (let i = 0; i < numberArray.length; i++) {
  if (i % 2 == 0) {
    left += numberArray[i];
  } else {
    right += numberArray[i];
  }
}
let temp = left + right;
console.log(temp);

// const leftArray = Array.from(String(left), Number);
// const rightArray = Array.from(String(right), Number);

// for (let i = 0; i < leftArray.length; i++) {
//   left = 0;
//   left += leftArray[i];
// }


// console.log(right+left);
