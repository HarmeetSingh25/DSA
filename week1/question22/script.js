const prompt = require("prompt-sync")({ sigint: true });
const char = prompt("enter the collector A to Z ").toLowerCase();
if (char.length !== 1) {
  console.log("Invalid char");
} else if (char < "a" || char > "z") {
  console.log(`${char} Invalid char`);
} else if ("aeiou".includes(char)) {
  console.log(`${char} is vowel`);
  return;
} else {
  console.log(`${char} is Consonant`);
  return;
}
