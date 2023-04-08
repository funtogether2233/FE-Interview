function dicesProbability(n: number): number[] {
  // 点数从n到6*n
  let dp: number[] = new Array(6).fill(1 / 6); // 一个骰子时的概率
  for (let i = 2; i <= n; ++i) {
    // 上一轮 dp 有 5 * i - 4 个结果，本轮有 5 * i + 1 个结果
    const tmp: number[] = new Array(5 * i + 1).fill(0);
    // 根据 dp 填充 tmp，相当于每种情况再 /6
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        tmp[j + k] += dp[j] / 6;
      }
    }
    dp = tmp;
  }
  return dp;
}

export default void 0;
