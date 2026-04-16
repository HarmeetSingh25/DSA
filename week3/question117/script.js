let a = "abaccb";
let target = "a";
let index = [];
let dis = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] == target) {
    if (index.length <= 1) {
      index.push(i);
      continue;
    }
  }
}
dis = index[index.length - 1];
console.log(dis);

for (let i = index[0]; i < index.length; i++) {
    console.log(i);
    
  dis -= i;
}

console.log("distance",dis);
