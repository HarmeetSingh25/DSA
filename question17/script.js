const prompt = require("prompt-sync")({ sigint: true });
const day = Number(prompt("Enter the number example for sunday 0"))
switch (day) {
  case 0:
    console.log("Sunday");

    break;
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("wednesday");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("Friday");

    break;
  case 6:
    console.log("saturday");

    break;

  default:
    console.log("enter valid Number");
    break;
}
