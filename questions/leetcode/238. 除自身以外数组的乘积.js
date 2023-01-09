/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const l = nums.length,
    answer = new Array(l);
  answer[0] = 1;
  for (let i = 1; i < l; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let R = 1;
  for (let i = l - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }
  return answer;
};
