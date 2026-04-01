let arr = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
    total += arr[j] - arr[i];
  }
}
console.log(total);
6