function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  (dp[0] = 1), (dp[1] = 1);
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      // 以 j 位置为根节点，左右分别有 dp[j - 1] 和 dp[i - j] 种
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];

  // let res = 1;
  // for (let i = 0; i < n; ++i) {
  //   res = (res * 2 * (2 * i + 1)) / (i + 2);
  // }
  // return res;
}

export default void 0;
