function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let res = Number.MAX_SAFE_INTEGER,
    dis = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; ++i) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if (Math.abs(nums[i] + nums[left] + nums[right] - target) < dis) {
        res = nums[i] + nums[left] + nums[right];
        dis = Math.abs(nums[i] + nums[left] + nums[right] - target);
      }
      if (nums[i] + nums[left] + nums[right] > target) {
        --right;
      } else if (nums[i] + nums[left] + nums[right] < target) {
        ++left;
      } else if (nums[i] + nums[left] + nums[right] == target) {
        return res;
      }
    }
  }
  return res;
}

export default void 0;
