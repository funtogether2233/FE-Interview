function singleNumbers(nums: number[]): number[] {
  let n = 0,
    m = 1,
    x = 0,
    y = 0;
  // x ^ y
  for (const num of nums) {
    n ^= num;
  }
  // 首位 1
  while ((m & n) === 0) {
    m = m << 1;
  }
  // 根据首位 1 拆分成 2 个数组进行异或
  for (const num of nums) {
    if ((m & num) === 0) {
      x ^= num;
    } else {
      y ^= num;
    }
  }
  return [x, y];
}

export default void 0;
