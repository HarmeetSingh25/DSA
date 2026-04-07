let arr = [5, 8, 6, 3, 4];
let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

even.sort((a,b)=>a-b)
odd.sort((a,b)=>a-b)
console.log("odd", odd);
console.log("even", even);
let e = 0
let o = 0
for (let i = 0; i < arr.length; i++) {
if(i%2 == 0){
    arr[i]= even[e++]
}else{
    arr[i]= odd[o++]

}
    
}
console.log(arr);
