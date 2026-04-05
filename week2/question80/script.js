let arr = [3, 1, 2, 2, 2, 1, 3];
let k = 2;
let pair = 0;

for (let i = 0; i < arr.length; i++) {
  let num = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
        num = i + j;
        if (num % k == 0) {
            pair++
        }
    }
    
  }
}

console.log(pair);
