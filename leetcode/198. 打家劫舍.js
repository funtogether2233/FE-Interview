/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let pre = nums[0],
    next = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    [pre, next] = [next, Math.max(pre + nums[i], next)];
  }
  return next;
};
