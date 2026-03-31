let arr = [1, 2, 3, 7, 5];
let target = 3;
let t = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  let r = [];
  for (let j = i; j < arr.length; j++) {
    r.push(arr[j]);
    sum += arr[j];
    if (sum == target) {
      console.log("found", r);
    }
  }
}
