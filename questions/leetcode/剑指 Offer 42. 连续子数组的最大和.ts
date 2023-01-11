function maxSubArray(nums: number[]): number {
  let res = nums[0],
    sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    res = Math.max(res, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return res;
}

export default void 0;
