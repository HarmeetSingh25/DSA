const prompt = require('prompt-sync')();
let s = prompt(" Enter the string ");
let constant = 0;
let vowel = 0;
for (let i = 0; i < s.length; i++) {
  let letter = s.charAt(i);
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowel++;
      break;

    default:
      constant++;
      break;
  }
}
console.log("constant",constant ,"vowel =", vowel );

