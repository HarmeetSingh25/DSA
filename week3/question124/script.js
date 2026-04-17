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

// for (let i = 0; i < arr.length; i++) {
//   let tst = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     tst += Number(arr[i][j]);
//   }
//   temp += tst;
// }
// let i = 0;
// let temp1 = 0;
// let last = temp[k];
// while (i < k) {
//   temp1 += Number(temp[i]);
//   i++;
// }
// temp = temp1;
// temp += last;
// let test=0
// for (let i = 0; i < temp.length; i++) {
// test+=Number(temp[i])

// }
// console.log(arr);
// console.log(temp);
// // console.log(last);
// console.log(test);
console.log(s);
