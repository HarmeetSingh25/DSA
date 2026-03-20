const prompt = require("prompt-sync")({ sigint: true });
const n = Number(prompt("Enter the number"));
if (n <= 0) {
  console.log("Enter the valid number ");
return;
}
for (let i = 1; i <= n; i++) {
  console.log(i);
}
