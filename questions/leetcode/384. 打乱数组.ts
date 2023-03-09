class Solution {
  nums: number[];
  original: number[];

  constructor(nums: number[]) {
    this.nums = nums;
    this.original = this.nums.slice();
  }

  reset(): number[] {
    this.nums = this.original.slice();
    return this.nums;
  }

  shuffle(): number[] {
    // Fisher-Yates 洗牌算法
    for (let i = 0; i < this.nums.length; ++i) {
      const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default void 0;
