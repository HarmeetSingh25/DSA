let s = "11111222223";

let k = 3;
let arr = [];
while (s.length > k) {
  let temp = "";

  for (let i = 0; i < s.length - 1; i += k) {
    let group = s.slice(i, i + k);
    let sum = 0;
    for (let j = 0; j < group.length; j++) {
      sum += Number(s[j]);
    }
    temp += sum;
  }
  s = temp;
}
console.log(s);
