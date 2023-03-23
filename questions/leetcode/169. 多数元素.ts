function majorityElement(nums: number[]): number {
  let res: number = nums[0],
    count: number = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === res) {
      count++;
      continue;
    }
    if (--count < 0) {
      res = nums[i];
      count = 1;
    }
  }
  return res;
}

export default void 0;
