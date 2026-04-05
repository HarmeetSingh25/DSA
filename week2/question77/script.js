let arr = [3, 8, 15, 17];
arr.sort((a, b) => a - b);

let mindiff = Infinity;

for (let i = 0; i < arr.length - 1; i++) {
  let temp = Math.abs(arr[i] - arr[i + 1]);
  if (temp < mindiff) {
    mindiff = temp;
  }
}
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
  let diff = Math.abs(arr[i] - arr[i + 1]);
  if (diff == mindiff) sum += diff;
}
console.log(sum);
