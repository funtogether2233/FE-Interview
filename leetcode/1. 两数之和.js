/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for(let i=0;i<nums.length;i++){
  //     for(let j=i+1;j<nums.length;j++){
  //         if(nums[i]+nums[j]===target){
  //             return [i,j];
  //         }
  //     }
  // }
  // return [];
  let a = 5,
    b = 3,
    c = 1;
  a = b > c ? b-- : c--;
  return [a, b, c];
};
