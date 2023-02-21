function maxSubArray(nums: number[]): number {
  let res = -Infinity,
    curMax = 0,
    left = 0,
    right = 0;
  while (right !== nums.length) {
    if (curMax >= 0) {
      curMax += nums[right++];
      res = Math.max(res, curMax);
    } else {
      curMax -= nums[left++];
    }
  }
  return res;
}

export default void 0;
