for (let i = 0; i <= 5; i++) {
  let star = "";
  for (let j = 0; j < 5 - i; j++) {
    star += " ";
  }
 for (let j = 1; j <= 2*i - 1; j++) {
    star += "*";
  }
  console.log(star);
}
