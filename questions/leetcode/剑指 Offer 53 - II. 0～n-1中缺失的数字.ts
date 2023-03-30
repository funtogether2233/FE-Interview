function missingNumber(nums: number[]): number {
  // 二分法
  let left: number = 0,
    right: number = nums.length - 1;
  //mid和nums[mid]相等证明缺失的数字在mid后面，则移动左指针
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

export default void 0;
