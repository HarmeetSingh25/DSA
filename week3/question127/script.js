let word = "abcdefd";
let ch = "d";

let index = word.indexOf(ch);

if (index !== -1) {
  let prefix = word.slice(0, index + 1);
  let rest = word.slice(index + 1);

  let result = prefix.split("").reverse().join("") + rest;
  console.log(result);
} else {
  console.log(word);
}