const prompt = Number(require('prompt-sync')({ sigint: true }))
let int = prompt("Enter the interger")
if(int%2== 0){
console.log("This is even number", int);
}else{
console.log("This is odd number", int);

}