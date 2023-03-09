/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // nums.sort((a, b) => {
  //   if (a === 0) {
  //     return 1;
  //   }
  //   if (b === 0) {
  //     return -1;
  //   }
  //   return 0;
  // });

  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
}

export default void 0;
