let arr = [5, 2, 9, 1, 3, 8];
let mid = Math.floor(arr.length / 2);
for (let i = 0; i < mid; i++) {
  let min = i;
  for (let j = i + 1; j < mid; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

for (let i = mid; i < arr.length; i++) {
  let max = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[max]) {
      max = j;
      console.log(max);
    }
  }
  let temp = arr[i];
  arr[i] = arr[max];
  arr[max] = temp;
}
console.log(arr);

