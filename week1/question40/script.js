const prompt = require("prompt-sync")({ sigint: true });
let val=""
do {
    console.log("Hello");
    let input = prompt("Enter the input yes for repeat ")
val= input
} while (val=="yes");

if (val!= "yes") {
    console.log("Stop");   
}