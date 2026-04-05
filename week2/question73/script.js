let arr = [2, 3, 4, 5, 6];
let prev = arr[0];
arr[0] = arr[0] * arr[1];
for (let i = 1; i < arr.length - 1; i++) {
  let current = arr[i];

  arr[i] = prev * arr[i + 1];
  prev = current;
}
arr[arr.length - 1] = prev * arr[arr.length - 1];

console.log(arr);
