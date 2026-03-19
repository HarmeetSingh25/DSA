// question 6
const prompt= require('prompt-sync')({ sigint: true })
let  num1= Number(prompt("enter the first number "))
let num2= Number(prompt("enter the second number "))
[num1 , num2] = [num2 , num1]

console.log(`this is num1 ${num1} this is num2 ${num2 }`);