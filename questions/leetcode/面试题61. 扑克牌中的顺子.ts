function isStraight(nums: number[]): boolean {
  // 若干副牌
  // 0代表任意值，1A、2-10、11J、12Q、13K   【0，13】
  // 排序、过滤
  let set = new Set();
  let max = 1,
    min = 14;
  // let arr = nums.sort((a,b)=> a-b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (set.has(nums[i])) return false;
      set.add(nums[i]);
      max = Math.max(max, nums[i]);
      min = Math.min(min, nums[i]);
    }
  }
  return max - min < 5;
}

export default void 0;
