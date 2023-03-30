function twoSum(nums: number[], target: number): number[] {
  let left: number = 0,
    right: number = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [nums[left], nums[right]];
    } else if (nums[left] + nums[right] > target) {
      --right;
    } else {
      ++left;
    }
  }
  return [];
}

export default void 0;
