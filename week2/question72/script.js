let sumA = 0;
let sumB = 0;
let sumC = 0;
let A = [3, 6, 2, 9, 4];
let B = ["a", "b", "c", "a", "c"];
for (let i = 0; i < B.length; i++) {
  if (B[i] == "a") {
    sumA += A[i];
  }
  if (B[i] == "b") {
    sumB += A[i];
  }
  if (B[i] == "c") {
    sumC += A[i];
  }
}
let result = Math.min(sumA + sumB, sumC);
console.log(result);
