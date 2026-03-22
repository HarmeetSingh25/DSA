const prompt = require("prompt-sync")({ sigint: true });
let add = "add";
let subtract = "subtract";
let Multiply = "multiply";
let Divide = "divide";
let Exit = "exit";

let choice;
do {
  choice = prompt(
    "Enter the option <--add , subtract , Multiply , Divide , Exit -->",
  ).toLowerCase();
  if (choice == Exit) return console.log("stop");

  let n = Number(prompt("Enter the number "));
  let n1 = Number(prompt("Enter the second number "));
  if (choice == add) {
    console.log(n + n1);
  } else if (choice == subtract) {
    console.log(n - n1);
  } else if (choice == Multiply) console.log(n * n1);
  else if (choice == Divide) console.log(Math.floor(n / n1));
} while (choice != Exit);

