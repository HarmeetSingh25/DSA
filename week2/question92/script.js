let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let t = 0
let r =0
let midpoint = Math.ceil(arr.length / 2);
let midrow 

let qq = arr.length - 1;
for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    t+=(arr[i][i]);
  } else {
    t+=(arr[i][i]);
  }
  for (let j = qq; j >= 0; j--) {
    if (j == arr.length - 1) {
      r+=(arr[i][j]);
      qq--;
      break;
    } else {
      r+=(arr[i][j]);
      qq--;
      break;
    }
  }
  if (i == midpoint - 1) {
midrow=i

}
}
let result = (t + r )- (arr[midrow][midpoint-1]);

console.log(t);
console.log(r);

console.log(result , "result " );