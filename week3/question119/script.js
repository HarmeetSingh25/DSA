let s = "ilovecodingonleetcode";
let target = "code";

let freqS = {};
let freqTarget = {};

// count characters in s
for (let char of s) {
  freqS[char] = (freqS[char] || 0) + 1;
}

// count characters in target
for (let char of target) {
  freqTarget[char] = (freqTarget[char] || 0) + 1;
}

// find minimum possible copies
let result = Infinity;

for (let char in freqTarget) {

  let possible = Math.floor(freqS[char] / freqTarget[char]);

  result = Math.min(result, possible);

}

console.log(result);