let arr = [1, 5, 0, 3, 5];

let freq = {};
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  
  if (arr[i] == freq[num] || arr[i] == 0) {
    continue;
  } else {
    freq[num] = (freq[num] || 0) + 1;
  }
}

for (const key in freq) {
  // console.log(freq);
  
  count++;
}
console.log(count);
