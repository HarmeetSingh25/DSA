const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the automorphic number <-- 6 , 5 , 76 -->");
let temp = 1;
let automorphicNumber = n * n;
for (let i = 1; i <= n.length; i++) {
  temp *= 10;
}
let result =automorphicNumber%temp



if(n == result){
    console.log(` ${n}  is automorphic number`);
}
else{
    console.log(` ${n}  is not  automorphic number`);
    
}
