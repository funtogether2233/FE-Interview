function longestCommonSubsequence(text1: string, text2: string): number {
  if (text1 === text2) {
    return text1.length;
  }
  const m = text1.length,
    n = text2.length,
    dp: number[][] = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i += 1) {
    const item1 = text1[i - 1];
    for (let j = 1; j <= n; j += 1) {
      const item2 = text2[j - 1];
      if (item1 === item2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

export default void 0;
