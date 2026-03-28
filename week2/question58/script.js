const prompt = require("prompt-sync")();
const int = Number(prompt("Enter the number for size of array"));
let arr = [];
let reverse = [];
for (let i = 0; i < int; i++) {
  arr.push(prompt("Enter the value for array"));
}
for (let i = arr.length - 1; i >=0; i--) {
  reverse.push(arr[i]);
}
console.log("User array", arr );
console.log("Reverse array", reverse );

