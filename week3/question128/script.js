let arr = [1, 2, 2, 3, 4, 4];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}
let result = [];
for (const val in obj) {
  // console.log(obj[val]);
  if (obj[val] == 1) {
    result.push(Number(val));
  }
}

console.log(result);
