// question 7
const prompt= require('prompt-sync')({ sigint: true })
let length= Number(prompt("Enter the length"))
let width= Number(prompt("Enter the width"))
let p = 2*(length+width)
console.log(p);