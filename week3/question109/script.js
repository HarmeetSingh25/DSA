let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
let n;
let max = 0;
for (let i = 0; i < sentences.length; i++) {
  n = sentences[i].split(" ");

  if (n.length > max) {
    max = n.length;
  }
}

console.log(max);
