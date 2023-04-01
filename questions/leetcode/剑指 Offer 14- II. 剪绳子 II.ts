function cuttingRope(n: number): number {
  const dp: number[] = new Array(n).fill(0);
  (dp[2] = 1), (dp[3] = 2), (dp[4] = 4), (dp[5] = 6), (dp[6] = 9);
  for (let i = 7; i <= n; ++i) {
    dp[i] = (dp[i - 3] * 3) % (1e9 + 7);
  }
  return dp[n];
}

export default void 0;
