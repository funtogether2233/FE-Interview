/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //   if (nums.length < 3) {
  //     return [];
  //   }
  //   nums.sort((a, b) => a - b);
  //   const res = [];
  //   for (let i = 0; i < nums.length - 2; i++) {
  //     if (nums[i] > 0) {
  //       break;
  //     }
  //     // a去重
  //     if (i > 0 && nums[i] === nums[i - 1]) {
  //       continue;
  //     }
  //     let l = i + 1,
  //       r = nums.length - 1;
  //     while (l < r) {
  //       const sum = nums[i] + nums[l] + nums[r];
  //       if (sum < 0) {
  //         l++;
  //         continue;
  //       }
  //       if (sum > 0) {
  //         r--;
  //         continue;
  //       }
  //       res.push([nums[i], nums[l], nums[r]]);
  //       // b c 去重
  //       while (l < r && nums[l] === nums[++l]);
  //       while (l < r && nums[r] === nums[--r]);
  //     }
  //   }
  //   return res;
  // 第二次写，抄了一遍题解和第一遍写法
  let n = nums.length;
  if (n < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let first = 0; first < n - 2; ++first) {
    if (nums[first] > 0) {
      break;
    }
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue;
    }
    let second = first + 1,
      third = n - 1;
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (sum < 0) {
        ++second;
        continue;
      }
      if (sum > 0) {
        --third;
        continue;
      }
      res.push([nums[first], nums[second], nums[third]]);
      while (second < third && nums[second] === nums[++second]);
      while (second < third && nums[third] === nums[--third]);
    }
  }
  return res;
};
