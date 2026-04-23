let v = "I have 1 dog and 2 cats";
let num = [];
let split = v.split(" ");
let reslt = true;
for (let i = 0; i < split.length; i++) {
  let temp = Number(split[i]);
  if (typeof temp === "number" && !Number.isNaN(temp)) {
    num.push(temp);
  }
}

for (let i = 0; i < num.length - 1; i++) {
  let temp = num[i + 1];
  console.log(num[i], temp);
  if (num[i] < temp) {
    continue;
  } else {
    reslt = false;
    break
  }
}
console.log(reslt);
