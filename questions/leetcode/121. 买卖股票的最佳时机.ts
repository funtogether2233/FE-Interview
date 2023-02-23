function maxProfit(prices: number[]): number {
  let res = 0,
    minPrice = prices[0];
  for (let i = 0; i < prices.length; ++i) {
    res = Math.max(res, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return res;
}

export default void 0;
