/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // let i = 1, l = nums.length;
  // nums.unshift(-Infinity);
  // nums.push(-Infinity);
  // for(; i <= l; i++){
  //     if(nums[i - 1] < nums[i] && nums[i] > nums[i + 1]){
  //         return i - 1;
  //     }
  // }
  // return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
