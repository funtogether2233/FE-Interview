function maxProfit(prices: number[]): number {
  let res = 0,
    min = prices[0];
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > min) {
      res = Math.max(res, prices[i] - min);
    } else {
      min = prices[i];
    }
  }
  return res;
}

export default void 0;
