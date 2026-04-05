let arr = [1, 3, 2, 1, 3, 2, 2];
let freq = {};
let pairs = 0;
let leftover = 0;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  freq[num] = (freq[num] || 0) + 1;
}
for (const key in freq) {
  pairs += Math.floor(freq[key] / 2);
  leftover += freq[key] % 2;
}
console.log(`pairs ${pairs} , lefover ${leftover}`);
