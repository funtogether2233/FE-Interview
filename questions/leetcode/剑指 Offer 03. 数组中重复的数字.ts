function findRepeatNumber(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    let k = nums[i];
    if (k < 0) {
      k += n;
    }
    if (nums[k] < 0) {
      return k;
    }
    nums[k] -= n;
  }
  return -1;
}

export default void 0;
