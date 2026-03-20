const prompt = require("prompt-sync")({ sigint: true });

let units = Number(prompt("Enter you units number"));
let amount = 0;
let tmpunit = 0;
if (units <= 100) {
  amount = units * 5;
  console.log(amount);
} else if (units > 100 && units <= 200) {
  amount = 100 * 5;
  tmpunit = units - 100;
  amount += tmpunit * 7;
  console.log("Amount", amount);
} else if (units > 200 && units <= 300) {
  amount = 100 * 5 + 100 * 7;
  tmpunit = units - 200;
  amount += tmpunit * 10;
  console.log("Amount", amount);
} else {
  amount = 100 * 5 + 100 * 7 + 100 * 10;
  tmpunit = units - 300;
  amount += tmpunit * 12;
  console.log("Amount", amount);
}
