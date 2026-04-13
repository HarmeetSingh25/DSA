let a = "AcgDfD";
let b =""
for (let i = 0; i < a.length; i++) {
  if (a[i] == a[i].toUpperCase()) {
b+= a[i].toLowerCase()
}else{
      b+= a[i].toUpperCase()

  }
}
console.log(b);
