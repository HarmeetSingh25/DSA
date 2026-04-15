let arr = [2, -3, 4, -1, 6, -9];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  let temp;
  if (arr[left] < 0) {
    left++;
  } else if (arr[right] > 0) {
    right--;
  } else {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp

     left++;
    right--;
  }
}
console.log(arr);
