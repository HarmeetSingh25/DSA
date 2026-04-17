let Input = "6777133339";
let arr = [];
for (let i = 0; i < Input.length; i++) {
  if (Input[i] == Input[i + 1] && Input[i + 1] == Input[i + 2]) {
    let temp = Input[i] + Input[i + 1] + Input[i + 2];
    if (arr.includes(temp)) {
      continue;
    } else {
      arr.push(temp);
    }
  }
}
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
