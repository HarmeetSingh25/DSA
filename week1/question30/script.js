const prompt = require('prompt-sync')({ sigint: true });

const n = Number(prompt("Enter the number"))
 let factors = []
for (let i = 1; i <=n; i++) {
if(n%i==0){
    factors.push(i)
}
    
}
console.log(factors);
