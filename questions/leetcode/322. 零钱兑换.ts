function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; ++i) {
    for (let j = 0; j < coins.length; ++j) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];

  // 先物品，再容量
  //   let dp: number[] = new Array(amount + 1).fill(Infinity);
  //   dp[0] = 0;
  //   for (let i = 0; i < coins.length; i++) {
  //     for (let j = coins[i]; j <= amount; j++) {
  //       dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  //     }
  //   }
  //   return dp[amount] === Infinity ? -1 : dp[amount];
}

export default void 0;
