let number = "133235";
let t = "3";
let arr = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] == t) {
    let temp = number.slice(0, i) + number.slice(i + 1);

    arr.push(temp);
  }
}
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) > Number(max)) {
    max = arr[i];
  }
}
console.log(max);
