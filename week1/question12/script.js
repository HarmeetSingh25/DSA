const prompt = require('prompt-sync')({ sigint: true });
const num1 = Number(prompt("Enter first number"))
const num2 = Number(prompt("Enter second number"))
if(num1>num2){
    console.log("This num1",num1);
}
else{
console.log("This is num2", num2);

}