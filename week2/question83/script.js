let num1 = 2;
let num2 = 3;
let operation = 0;
while (num1 > 0 || num2 > 0) {
  if (num1 == num2) {
    num1 = 0;
    num2 = 0;
    operation++;
    break;
  }
  if (num1 > num2) {
    num1 = num1 - num2;
    operation++;
  } else {
    num2 = num2 - num1;
    operation++;
  }
}
console.log(operation);
