const prompt = require("prompt-sync")({ sigint: true });
const num1 = Number(prompt("Enter first number"));
const second = Number(prompt("Enter second number"));
const Third = Number(prompt("Enter Third number"));
if (num1 > second && num1 > Third) {
  console.log("Number 1 is Greater ", num1);
} else if (second > Third && second > num1) {
  console.log("Number 2 is Greater", second);
} else if (Third > num1 && Third > second) {
  console.log("Number Third is Greater", Third);
} else if (
  num1 == second ||
  num1 == Third ||
  second == num1 ||
  second == Third ||
  Third == num1 ||
  Third == second
) {
  console.log("No one is Greater");
}
