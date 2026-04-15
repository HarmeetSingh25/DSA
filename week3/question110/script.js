let a = "hello world";
let obj = {};
for (let i = 0; i < a.length; i++) {
  if (a[i] == " ") {
    continue;
  }
  obj[a[i]] = (obj[a[i]] || 0) + 1;
}
console.log(obj);
