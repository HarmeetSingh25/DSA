let a = "javascript";
let vowels = ["a", "e", "i", "o", "u"];
let vowelList = [];
let consonantList = [];
for (let i = 0; i < a.length; i++) {
  if (vowels.includes(a[i])) {
    vowelList.push(a[i]);
  } else {
    consonantList.push(a[i]);
  }

}
console.log(vowelList, "vowal", consonantList, "constant");
