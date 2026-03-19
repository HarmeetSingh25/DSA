// question 2 and question 3
const prompt= require('prompt-sync')({ sigint: true })
const num1= prompt("enter the first number")
const num2= prompt("enter the second number ")
console.log(`This sum of ${num1} and ${num2} = ${num1+num2}`);