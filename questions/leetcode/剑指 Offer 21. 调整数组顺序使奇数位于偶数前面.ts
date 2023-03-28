function exchange(nums: number[]): number[] {
  // const res: number[] = [];
  // for (const num of nums) {
  //   if (num % 2) {
  //     res.unshift(num);
  //   } else {
  //     res.push(num);
  //   }
  // }
  // return res;

  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 1) {
      ++left;
      continue;
    }
    if (nums[right] % 2 === 0) {
      --right;
      continue;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
}

export default void 0;
