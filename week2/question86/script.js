function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let arr = [2, 4, 6, 8];

let result = arr[0];

for (let i = 1; i < arr.length; i++) {
  result = gcd(result, arr[i]);
}

console.log(result);