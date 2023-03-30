function search(nums: number[], target: number): number {
  // return nums.filter((num) => num === target).length;

  // 二分
  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false);
  return right - left + 1;

  function binarySearch(nums: number[], target: number, lower: boolean) {
    let left = 0,
      right = nums.length - 1,
      res = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (lower ? nums[mid] >= target : nums[mid] > target) {
        right = mid - 1;
        res = mid;
      } else {
        left = mid + 1;
      }
    }
    return lower ? res : res - 1;
  }
}

export default void 0;
