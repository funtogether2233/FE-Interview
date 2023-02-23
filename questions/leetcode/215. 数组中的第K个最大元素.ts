function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);

  function quickSelect(
    arr: number[],
    left: number,
    right: number,
    index: number
  ): number {
    let pivot = randomPartition(arr, left, right);
    if (pivot === index) {
      return arr[pivot];
    }
    if (pivot < index) {
      return quickSelect(arr, pivot + 1, right, index);
    }
    return quickSelect(arr, left, pivot - 1, index);
  }

  function randomPartition(arr: number[], left: number, right: number): number {
    let pivot = Math.floor(Math.random() * (right - left) + left);
    [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    let i = left;
    for (let j = left; j < right; ++j) {
      if (arr[j] < arr[right]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        ++i;
      }
    }
    [arr[i], arr[right]] = [arr[right], nums[i]];
    return i;
  }
}

export default void 0;
