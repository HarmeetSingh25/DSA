let s = "12344455999";
let arr = [];
let max = "";
for (let i = 0; i < s.length; i++) {
  if (s[i] == s[i + 1] && s[i] == s[i + 2]) {
    let temp = "";
    temp += s[i] + s[i + 1] + s[i + 2];
    if (temp > max) {
      max = temp;
    }
  }
}

console.log(max);
