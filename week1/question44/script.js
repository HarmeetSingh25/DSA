const prompt = require("prompt-sync")({ sigint: true });
let randomNumber= Math.floor((Math.random()*10)+1)
let  n
do {
    n = Number(prompt("Enter the number"));
    if(n<randomNumber){
        console.log(` ${n} Too low`);
    }else if(n>randomNumber){
        console.log(` ${n} Too High`);
    }else{
        console.log(`n = ${n} correct randomNumber= ${randomNumber} `);
        
    }
    
} while (n!=randomNumber);

