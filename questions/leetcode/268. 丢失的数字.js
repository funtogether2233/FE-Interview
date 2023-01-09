/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // nums.sort(cmp=(a,b)=>a-b);
  // let i=0;
  // for(;i<nums.length;i++){
  //     if(nums[i]!==i){
  //         return i;
  //     }
  // }
  // return i;

  // let ans=nums.length;
  // for(let i=0;i<nums.length;i++){
  //     ans^=nums[i];
  //     ans^=i;
  // }
  // return ans;

  let ans = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans += i - nums[i];
  }
  return ans;
};
