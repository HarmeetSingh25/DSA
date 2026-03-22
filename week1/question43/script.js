const prompt = require("prompt-sync")({ sigint: true });
const letter = prompt("Enter the number");
function isVowel(v) {
  switch (v.toLowerCase()) {
    case "a":
      console.log("Vowel");
      break;
    case "2":
      console.log("Vowel");
      break;
    case "i":
      console.log("Vowel");
      break;
    case "o":
      console.log("Vowel");
      break;
    case "u":
      console.log("Vowel");
      break;
    default:
      console.log("Consonant");
  }
}
isVowel(letter);
