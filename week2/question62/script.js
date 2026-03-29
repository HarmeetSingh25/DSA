let arr = [10, 20, 30, 40, 50];
let target = 40;
let find = false;
let index;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    find = true;
    index = i;
    break;
  }
}
if (find) {
  console.log("yes found it ", index);
} else {
  console.log("not found ");
}
