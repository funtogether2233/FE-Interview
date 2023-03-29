function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);

  function quickSelect(
    nums: number[],
    left: number,
    right: number,
    target: number
  ): number {
    let pivot = randomPartition(nums, left, right);
    if (pivot === target) {
      return nums[pivot];
    }
    if (pivot < target) {
      return quickSelect(nums, pivot + 1, right, target);
    }
    return quickSelect(nums, left, pivot - 1, target);
  }

  function randomPartition(
    nums: number[],
    left: number,
    right: number
  ): number {
    let pivot = Math.floor(Math.random() * (right - left) + left);
    [nums[pivot], nums[right]] = [nums[right], nums[pivot]];
    let i = left;
    for (let j = left; j < right; ++j) {
      if (nums[j] < nums[right]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        ++i;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
}

export default void 0;
