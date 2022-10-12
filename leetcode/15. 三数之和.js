/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    // a去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);
      // b c 去重
      while (l < r && nums[l] === nums[++l]);
      while (l < r && nums[r] === nums[--r]);
    }
  }
  return res;
};
