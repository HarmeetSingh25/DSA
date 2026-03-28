let arr = [2, 96, 69, 77, 145, 200];
let greater = 0;
let second = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > greater ) {
    second = greater;
    greater = arr[i];
  }else if(arr[i]>second && arr[i] != greater){
    second= arr[i]
  }
}
console.log("Greater", greater);
console.log("second", second);
