let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let colum = new Array(arr[0].length);

for (let i = 0; i < arr[0].length; i++) {
  colum[i] = new Array();
  for (let j = 0; j < arr.length; j++) {
    colum[i][j] = arr[j][i];
  }
}
console.log(colum);
