function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  let minPrice1 = prices[0],
    profit1 = 0,
    minPrice2 = prices[0],
    profit2 = 0;

  for (let i = 1; i < prices.length; ++i) {
    minPrice1 = Math.min(minPrice1, prices[i]);
    profit1 = Math.max(profit1, prices[i] - minPrice1);
    minPrice2 = Math.min(minPrice2, prices[i] - profit1);
    profit2 = Math.max(profit2, prices[i] - minPrice2);
  }
  return profit2;
}

export default void 0;

// 3, 3, 5, 0, 0, 3, 1, 4
// 3, 3, 3, 0, 0, 0, 0, 0  minPrice1
// 0, 0, 2, 2, 2, 3, 3, 4  profit1
// 3, 3, 3,-2,-2,-2,-2,-2  minPrice2
// 0, 0, 2, 2, 2, 5, 5, 6  profit2

// 1, 2, 3, 4, 5
// 1, 1, 1, 1, 1  minPrice1
// 0, 1, 2, 3, 4  profit1
// 1, 1, 1, 1, 1  minPrice2
// 0, 1, 2, 3, 4  profit2
