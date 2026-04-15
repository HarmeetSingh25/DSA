let a = "hello";
let b = "taste";
let anagram = false;
if (a.length == b.length) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        anagram = true;
        continue;
      } else {
        break;
      }
    }
  }
} else {
  console.log("not");
}

if (anagram == true) {
  console.log("yes");
} else {
  console.log("not");
}
