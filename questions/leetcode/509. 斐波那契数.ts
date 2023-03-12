function fib(n: number): number {
  // let dp: number[] = [0, 1];
  // for (let i = 2; i <= n; ++i) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];
  let pre = 1,
    cur = 0;
  while (n--) {
    [pre, cur] = [cur, pre + cur];
  }
  return cur;
}

export default void 0;
