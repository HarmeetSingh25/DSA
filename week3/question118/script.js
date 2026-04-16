let s = "arRAzFif";

let set = new Set(s);

for (let i = 90; i >= 65; i--) {

  let upper = String.fromCharCode(i);

  let lower = upper.toLowerCase();

  if (set.has(upper) && set.has(lower)) {

    console.log(upper);
    break;

  }

}