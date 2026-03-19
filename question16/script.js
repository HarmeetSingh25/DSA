const prompt = (require('prompt-sync')({ sigint: true }))
let name = prompt("Enter the name")
let age = Number(prompt("Enter the age"))
if(age<18){
    console.log(`Hello ${name}, You are Invalid voter Sorry ${name}, you can't cast the vote`);
    console.log(` you became vaild voter after ${18-age} years   `);
}
else{
    console.log(`Hello ${name}, You are a valid voter.`);
    
}
