// question 4
const prompt= require('prompt-sync')({ sigint: true })
const name = prompt(" Enter the Name " )
const age = prompt("Enter the age ")
console.log(`Hello ${name} you are ${age} year old`);