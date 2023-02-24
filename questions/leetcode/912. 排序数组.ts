function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;

  function quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) {
      return;
    }
    let pivot = Math.floor(Math.random() * (right - left) + left);
    [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    let i = left,
      j = right - 1;
    while (true) {
      while (nums[i] < nums[right]) {
        ++i;
      }
      while (nums[j] > nums[right]) {
        --j;
      }
      if (i >= j) {
        break;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ++i, --j;
    }
    [arr[right], arr[i]] = [arr[i], arr[right]];
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
}

export default void 0;
