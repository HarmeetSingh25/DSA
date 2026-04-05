let arr = [3, 2, 3, 2, 2, 1];
let arr1 = [...arr];
let freq = {};
for (let i = 0; i < arr1.length; i++) {
  let num = arr[i];
  freq[num] = (freq[num] || 0) + 1;
}
let possible = true;
for (const key in freq) {
  if (freq[key] % 2 !== 0) {
    possible = false;
    break;
  }
}
console.log(possible);
