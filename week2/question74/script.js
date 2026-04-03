let arr = [2, 3, 5, 4, 1];
let max = -Infinity;
let step = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    step++;
  }
}

console.log(step);