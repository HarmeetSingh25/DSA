let sentence = "I love coding";
let res = sentence.split(" ");
for (let i = 0; i < res.length; i++) {


    
  console.log(res[i].charAt(0).toUpperCase() + res[i].slice(1))
}
