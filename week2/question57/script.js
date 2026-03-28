let arr = [1, 5, 8, 9, 10];
let sorted = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    sorted = false;
    break;
  } else {
    sorted = true;
  }
}
if (sorted) {
  console.log("yes sorted ");
} else {
  console.log("not ");
}
