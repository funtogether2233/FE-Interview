/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let maxP=0,minP=0x3f3f3f,deltaP=0;
  // for(let i=0;i<prices.length;i++){
  //     maxP=prices[i]>maxP?prices[i]:maxP;
  //     if(prices[i]<minP){
  //         minP=prices[i];
  //         maxP=prices[i];
  //     }
  //     deltaP=maxP-minP>deltaP?maxP-minP:deltaP;
  // }
  // return deltaP;

  //   let minPrice = prices[0],
  //     maxProfit = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  //     minPrice = Math.min(minPrice, prices[i]);
  //   }
  //   return maxProfit;

  // 第二次写
  let maxProfit = 0,
    minPrice = prices[0],
    n = prices.length;
  for (let i = 0; i < n; ++i) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
};
