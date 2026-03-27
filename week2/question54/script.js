const prompt = require('prompt-sync')({ sigint: true });   
const size  = Number(prompt("Write the size of array "))
const arr =[]
let  sum=0
for (let i = 1; i <=size; i++) {
let number =Number(prompt(`Enter the ${i}th number for array `))
arr.push(number)
sum+=number
}
console.log(sum , arr , sum/size);
