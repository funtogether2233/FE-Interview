/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // if(nums.length===1){
  //     return nums[0];
  // }
  // let maxSum=-10001;
  // for(let i=0,tmp=0;i<nums.length;i++){
  //     tmp+=nums[i];
  //     if(tmp<=0){
  //         maxSum=maxSum>=tmp?maxSum:tmp;
  //         tmp=0;
  //     }else{
  //         if(nums[i]>0){
  //             maxSum=maxSum>=tmp?maxSum:tmp;
  //         }
  //     }
  // }
  // return maxSum;
  // 数组长度，dp初始化
  const len = nums.length;
  let dp = new Array(len).fill(0);
  dp[0] = nums[0];
  // 最大值初始化为dp[0]
  let max = dp[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    // 更新最大值
    max = Math.max(max, dp[i]);
  }
  return max;
};
