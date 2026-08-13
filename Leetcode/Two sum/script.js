var findMaxAverage = function (nums, k) {
  let i = 0;
  let maxsum = -Infinity;
  let windowSum = 0;

  while (i < nums.length) {
    if (i < k) {
      windowSum += nums[i];
    }
    if (i == k - 1) {
      return (windowSum = nums[i]);
    } else {
      windowSum = windowSum - nums[i - k] + nums[i];
      maxsum = Math.max(windowSum, maxsum);
    }
    i++;
  }
  return windowSum / k;
};


console.log(Math.sqrt(576));
