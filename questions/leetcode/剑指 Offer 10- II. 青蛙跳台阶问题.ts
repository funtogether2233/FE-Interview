function numWays(n: number): number {
  // let dp: number[] = [1, 1, 2];
  // for (let i = 3; i <= n; ++i) {
  //   dp[i] = (dp[i - 1] + dp[i - 2])%1000000007;
  // }
  // return dp[n];

  let pre = 0,
    cur = 1;
  while (n--) {
    [pre, cur] = [cur, (pre + cur) % 1000000007];
  }
  return cur;
}

export default void 0;
