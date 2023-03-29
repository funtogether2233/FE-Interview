function majorityElement(nums: number[]): number {
  let x = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (count === 0) {
      x = nums[i];
    }
    if (nums[i] === x) {
      ++count;
    } else {
      --count;
    }
  }
  return x;
}

export default void 0;
