function firstMissingPositive(nums: number[]): number {
  // O(n), O(n)
  // const hash = new Set(nums);
  // let res = 0;
  // while (hash.has(++res));
  // return res;

  // 需要修改原数组才能 O(n), O(1)
  // 数组模拟hash做标记，负数 +n，正数对应位置取负
  // let n = nums.length;
  // for (let i = 0; i < n; ++i) {
  //   if (nums[i] <= 0) {
  //     nums[i] = n + 1;
  //   }
  // }
  // for (let i = 0; i < n; ++i) {
  //   const num = Math.abs(nums[i]);
  //   if (num <= n) {
  //     nums[num - 1] = -Math.abs(nums[num - 1]);
  //   }
  // }
  // for (let i = 0; i < n; ++i) {
  //   if (nums[i] > 0) {
  //     return i + 1;
  //   }
  // }
  // return n + 1;

  // 置换
  let n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < n; ++i) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

export default void 0;
