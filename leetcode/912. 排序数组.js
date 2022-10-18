/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 调库
  // return nums.sort((a, b) => a - b);

  // 快速排序
  const quickSort = (nums, l, r) => {
    if (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      const pivot = nums[r];
      let i = l;
      for (let j = l; j < r; ++j) {
        if (nums[j] <= pivot) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          ++i;
        }
      }
      [nums[i], nums[r]] = [nums[r], nums[i]];
      quickSort(nums, l, i - 1);
      quickSort(nums, i + 1, r);
    }
  };

  quickSort(nums, 0, nums.length - 1);
  return nums;
};
