// Sort the words of the sentence
let a = "i love coding";
let n = a.split(" ");
for (let i = 0; i < n.length; i++) {
  n.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
console.log(n);
