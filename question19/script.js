const prompt = require("prompt-sync")({ sigint: true });
const year = Number(prompt("enter the year"));
if (year % 4 == 0 && year % 100 != 0 || year%400==0) {
  console.log(`Yes , ${year} is leap year`);
}
else{
    console.log(`No ${year} is not leap year`);
    
}
