// Count Asterisks
let s = "l|*e*et|c**o|*de|";
let count = 0;
let insideBars = false;
for (let i = 0; i < s.length; i++) {
  if (s[i] == "|") {
    insideBars = !insideBars;
  } else if (s[i] == "*" && insideBars == false) {
    count++;
  }
}
console.log(count);
