let arr = [2, 96, 69, 77, 145, 200];
let greater = 0;
for (let i = 0; i < arr.length; i++) {
  if (greater < arr[i]) {
    greater = arr[i];
  }
}
console.log(greater);
