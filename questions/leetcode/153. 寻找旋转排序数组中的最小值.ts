function findMin(nums: number[]): number {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    const pivot = Math.floor((high + low) / 2);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];
}

export default void 0;
