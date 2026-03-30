let arr = [10, 20, 30, 40, 50, 60];
let target = 50;
let index = -1;
let start = 0;
let end = arr.length - 1;
while (start <= end) {
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] == target) {
    index = middle;
    break;
  } else if (target > arr[middle]) {
    start = middle + 1;
  } else {
    start = middle - 1;
  }
}
console.log(index);
