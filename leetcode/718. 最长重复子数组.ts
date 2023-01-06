function findLength(nums1: number[], nums2: number[]): number {
  // 动态规划
  //   let res = 0,
  //     l1 = nums1.length,
  //     l2 = nums2.length;
  //   let dp: number[][] = Array.from(Array(l1 + 1), () =>
  //     new Array(l2 + 1).fill(0)
  //   );
  //   for (let i = l1 - 1; i >= 0; --i) {
  //     for (let j = l2 - 1; j >= 0; --j) {
  //       dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
  //       res = Math.max(res, dp[i][j]);
  //     }
  //   }
  //   return res;

  // 滑动窗口
  let res = 0,
    l1 = nums1.length,
    l2 = nums2.length;
  for (let i = 0; i < l1; ++i) {
    let l = Math.min(l2, l1 - i);
    let maxl = maxLength(nums1, nums2, i, 0, l);
    res = Math.max(res, maxl);
  }
  for (let i = 0; i < l2; ++i) {
    let l = Math.min(l1, l2 - i);
    let maxl = maxLength(nums1, nums2, 0, i, l);
    res = Math.max(res, maxl);
  }
  return res;

  function maxLength(
    nums1: number[],
    nums2: number[],
    add1: number,
    add2: number,
    l: number
  ): number {
    let res = 0,
      k = 0;
    for (let i = 0; i < l; ++i) {
      if (nums1[add1 + i] === nums2[add2 + i]) {
        ++k;
      } else {
        k = 0;
      }
      res = Math.max(res, k);
    }
    return res;
  }
}
