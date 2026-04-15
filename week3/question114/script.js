// Percentage of Letter in String
let s = "foobar"
let letter = 'o'
let count =0
for (let i = 0; i < s.length; i++) {
if(s[i]== letter){
    count++
}   
}
console.log((count*100)/s.length);
