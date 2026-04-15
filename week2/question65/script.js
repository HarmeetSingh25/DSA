let arr = [1, -2, 3, -4, -1, 6];
let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] <= 0) {
    left++;
  } else if (arr[right] > 0) {
    right--;
  }else{
    let temp = arr[left]
    arr[left]= arr[right]
     arr[right]=temp
  }
}
console.log(arr);
