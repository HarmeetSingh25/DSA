let arr = [2, 4, 1, 1, 6, 5];
for (let i = 1; i < arr.length-1; i++) {
  let prev = arr[i - 1];
  let current = arr[i];
  let next = arr[i + 1];
  if (current > prev && current > next) {
    console.log("hill ⛰️");
  } else if (current < prev && current < next) {
    console.log("valley 🕳️");
  } else {
    continue;
  }
}
