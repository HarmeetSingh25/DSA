const prompt = require("prompt-sync")({ sigint: true });
let total = 0;
const Pizza = 200;
const burger = 120;
const pasta = 180;
const sandwitch = 100;
 let order
do {
  console.log("Menu= pizza , burger , pasta , sandwitch ");

 order = prompt("Enter the order ").toLowerCase()
  if(order =="pizza"){
    console.log("You pizza ");
    total+=Pizza
}else if(order =="burger"){
    console.log("You burger ");
    total+=burger

}else if(order =="pasta"){
    console.log("You pasta ");
    total+=pasta
  
}else if(order =="sandwitch"){
    console.log("You sandwitch ");
    total+=sandwitch
  }
  else{
    console.log("Not avaliable this item ");
  }
} while (order != "exit");
if (order=="exit") {
    console.log("you total bill is" , total , "Thank you 🙏");
    
}