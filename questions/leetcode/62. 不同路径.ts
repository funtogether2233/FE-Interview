function uniquePaths(m: number, n: number): number {
  // 组合数
  //   let a = m + n - 2,
  //     b = m - 1,
  //     c = n - 1,
  //     factA = 1,
  //     factB = 1,
  //     factC = 1;
  //   while (a) {
  //     factA *= a--;
  //   }
  //   while (b) {
  //     factB *= b--;
  //   }
  //   while (c) {
  //     factC *= c--;
  //   }
  //   return factA / factB / factC;

  // 动态规划
  const dp: number[][] = Array.from(Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
}

export default void 0;
