let a = "aababb ";

let seenB = false;

let result = false;
for (let i = 1; i < a.length; i++) {
  if (a[i] == "B" || a[i] == "b") {
    seenB = true;
  } else if (a[i] == a && seenB == true) {
    result = false;
    break
  }
}
console.log(result);
