/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  // 寻找靠右较小数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i;
  }
  // 寻找较大数
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 右侧是降序，需要翻转重排变升序
  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    ++left, --right;
  }
}

export default void 0;
