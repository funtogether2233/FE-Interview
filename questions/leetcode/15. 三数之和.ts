function threeSum(nums: number[]): number[][] {
  let res: number[][] = [],
    n = nums.length;
  nums.sort((a, b) => a - b);
  for (let first = 0; first < n - 2 && nums[first] <= 0; ++first) {
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue;
    }
    let second = first + 1,
      third = n - 1;
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (sum < 0) {
        ++second;
        continue;
      }
      if (sum > 0) {
        --third;
        continue;
      }
      res.push([nums[first], nums[second], nums[third]]);
      while (second < third && nums[second] === nums[++second]);
      while (second < third && nums[third] === nums[--third]);
    }
  }
  return res;
}

export default void 0;
