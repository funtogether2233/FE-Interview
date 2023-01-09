/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length - 1; fastIndex++) {
    if (nums[fastIndex] !== nums[fastIndex + 1]) {
      nums[++slowIndex] = nums[fastIndex + 1];
    }
  }
  return slowIndex + 1;
};
