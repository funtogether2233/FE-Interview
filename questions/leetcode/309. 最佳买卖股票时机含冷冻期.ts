function maxProfit(prices: number[]): number {
  if (prices.length === 1) {
    return 0;
  }
  const list = prices.map((v) => [-Infinity, -Infinity]);
  list[0][0] = 0;
  list[0][1] = -prices[0];
  list[1][0] = Math.max(list[0][0], list[0][1] + prices[1]);
  list[1][1] = Math.max(list[0][1], -prices[1]);
  for (let i = 2; i < prices.length; i++) {
    list[i][0] = Math.max(list[i - 1][0], list[i - 1][1] + prices[i]);
    list[i][1] = Math.max(list[i - 1][1], list[i - 2][0] - prices[i]);
  }
  return list[prices.length - 1][0];
}

export default void 0;

//  1  2  3  0  2
//  0  1  2  2  3  卖出
// -1 -1 -1  1  1  买入
