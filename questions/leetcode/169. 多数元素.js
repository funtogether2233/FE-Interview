/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = 0,
    cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cnt === 0) {
      res = nums[i];
      cnt++;
    } else {
      if (res === nums[i]) {
        cnt++;
      } else {
        cnt--;
      }
    }
  }
  return res;
};
