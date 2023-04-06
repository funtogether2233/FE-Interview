function nthUglyNumber(n: number): number {
  const dp: number[] = new Array(n);
  dp[0] = 1;
  let a = 0,
    b = 0,
    c = 0,
    n2 = 2,
    n3 = 3,
    n5 = 5;
  for (let i = 1; i < n; ++i) {
    dp[i] = Math.min(n2, n3, n5);
    if (dp[i] === n2) {
      ++a;
      n2 = dp[a] * 2;
    }
    if (dp[i] === n3) {
      ++b;
      n3 = dp[b] * 3;
    }
    if (dp[i] === n5) {
      ++c;
      n5 = dp[c] * 5;
    }
  }
  return dp[n - 1];
}

export default void 0;
