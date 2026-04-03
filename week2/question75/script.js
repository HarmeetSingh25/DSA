let arr = [1, 2, 1, 2, 1, 3];
let left = 0;
let right = 0;

let mid = arr.length / 2;

for (let i = 0; i < mid; i++) {
  left += arr[i];
}
for (let j =mid; j <= arr.length - 1; j++) {
  right += arr[j];
}
if (left == right) {
  console.log(true);
} else if (left > right) {
  console.log("we need to add ", left - right, "right side");
} else {
  console.log("we need to add ", right - left, "left side");
}
