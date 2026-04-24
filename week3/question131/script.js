const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
let idx = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    arr[idx++] = arr[i];
  }
}

console.log(arr.slice(0, idx));
