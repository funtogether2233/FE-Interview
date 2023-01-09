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

  // 第二次写，第一次写复杂度过高，改了官方题解哈希表做法
  const l = nums.length;
  const hashtable = new Map();
  for (let i = 0; i < l; ++i) {
    if (hashtable.has(target - nums[i])) {
      return [hashtable.get(target - nums[i]), i];
    }
    hashtable.set(nums[i], i);
  }
  return [];
};
