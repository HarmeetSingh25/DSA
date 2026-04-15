let a = "Hello bhai Kaise ho a";
let n = a.split(" ");

// console.log(n);
let result=[]
for (let i = 0; i < n.length; i++) {
    if(n[i].length==1){
const first = n[i].charAt(0).toUpperCase();
result.push(first);
continue
}
const first = n[i].charAt(0).toUpperCase();
  const last = n[i].slice(-1).toUpperCase();
  const middle = n[i].slice(1, -1);
  result.push(first + middle + last);

}
console.log(result);
