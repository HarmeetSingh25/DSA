const prompt = require("prompt-sync")({ sigint: true });

const amount = Number(prompt(" Enter the Amount "));

if (amount <= 1000) {
  console.log(`No discount on ${amount} rupees shopping`);
}
 else if (amount > 1000 && amount <= 5000) {
  let discount = (amount * 10) / 100;
  console.log(`Discount ${discount}`);

  let finalAmount = amount - discount;
  console.log(`10% discount so final amount is ${finalAmount}`);
} 
else if (amount > 5000 && amount <= 10000) {
  let discount = (amount * 20) / 100;
  let finalAmount = amount - discount;
  console.log(`Discount amount ${discount}`);
  console.log(`20% discount so final amount is ${finalAmount}`);
}
 else {
  let discount = (amount * 30) / 100;
  let finalAmount = amount - discount;
  console.log(`Discount amount ${discount}`);
  console.log(`30% discount so final amount is ${finalAmount}`);
}
