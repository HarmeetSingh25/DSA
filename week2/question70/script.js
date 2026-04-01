let nums = [0, 2, 1, 5, 3, 4];
let arr = [];
for (let i = 0; i < nums.length; i++) {
  let num1 = nums[i];
  arr.splice(nums[num1]);
}
console.log(arr);
