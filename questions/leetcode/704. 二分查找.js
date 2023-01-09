/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // const midSearch = (nums, target, left, right) => {
  //     if(left > right){
  //         return -1;
  //     }
  //     const mid = Math.floor((left + right) / 2);
  //     if(nums[mid] === target){
  //         return mid;
  //     }
  //     if(nums[mid] < target){
  //         return midSearch(nums, target, mid + 1, right)
  //     }
  //     return midSearch(nums, target, left, mid - 1)
  // }
  // return midSearch(nums, target, 0, nums.length - 1);

  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
