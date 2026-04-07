const arr = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] == 1) {
      arr[i][j] = 0;
    } else {
      arr[i][j] = 1;
    }
  }
}

console.log(arr);
