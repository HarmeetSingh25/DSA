const prompt = require('prompt-sync')({ sigint: true });
const gender = prompt("Enter your gender")
if(gender=="male"|| gender=="Male"){
    console.log(`Good Morning Sir`);
}
else if(gender=="female"|| gender=="Female"){
    console.log(`Good Morning ma'am`);

}
else{
    console.log("Wrong Input");
    
}