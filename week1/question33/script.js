const prompt = require('prompt-sync')({ sigint: true });

const n = Number(prompt("Enter the number"))
const n1 = Number(prompt("Enter power number"))
console.log(n**n1)
