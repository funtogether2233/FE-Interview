function minSubArrayLen(target: number, nums: number[]): number {
  let res = Infinity,
    left = 0,
    right = 0,
    sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      res = Math.min(res, right - left + 1);
      sum -= nums[left];
      ++left;
    }
    ++right;
  }
  return res === Infinity ? 0 : res;
}
