for (let i = 1; i <=5; i++) {
  let star = "";
  for (let x = 1; x <=5-i; x++) {
    star += " ";
  }
  for (let j = 1; j <=i; j++) {
    star += "*";
  }
  console.log(star);
}
