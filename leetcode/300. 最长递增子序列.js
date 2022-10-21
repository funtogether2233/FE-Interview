/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划
  // const l = nums.length;
  // if(l === 0){
  //     return 0;
  // }
  // const dp = new Array(l).fill(1);
  // let res = 1;
  // for(let i = 1; i < l; ++i){
  //     for(let j = 0; j < i; ++j){
  //         if(nums[i] > nums[j]){
  //             dp[i] = Math.max(dp[i], dp[j] + 1);
  //         }
  //     }
  //     res = Math.max(res, dp[i]);
  // }
  // return res;

  // 贪心 + 二分查找
  const n = nums.length;
  if (n == 0) {
    return 0;
  }
  let len = 1;
  const d = new Array(n + 1);
  d[len] = nums[0];
  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      let l = 1,
        r = len,
        pos = 0;
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
};
