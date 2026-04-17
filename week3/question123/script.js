let num = "1210";

// Step 1 → count frequency of each digit
let obj = {};

for (let i = 0; i < num.length; i++) {
  obj[num[i]] = (obj[num[i]] || 0) + 1;
}

// Step 2 → check index condition
for (let i = 0; i < num.length; i++) {

  let expectedCount = Number(num[i]);   // what index expects
  let actualCount = obj[i] || 0;        // actual frequency of digit i

  if (expectedCount !== actualCount) {
    console.log(false);
    return;
  }

}

console.log(true);