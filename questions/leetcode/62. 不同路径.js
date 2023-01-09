/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // let dp = new Array(m);
  // const dp = Array(m).fill().map(item => Array(n))
  // for(let i = 0; i < m; i++){dp[i] = new Array(n);}
  // for(let i = 0; i < m; i++){
  //     for(let j = 0; j < n; j++){
  //         if(i === 0 || j === 0){dp[i][j] = 1}
  //         else{dp[i][j] = dp[i-1][j] + dp[i][j-1];}
  //     }
  // }
  // return dp[m - 1][n - 1];

  // let numerator = 1, denominator = m - 1, count = m - 1, t = m + n - 2;// 分子 分母
  // while (count--) {
  //     numerator *= (t--);
  //     while (denominator != 0 && numerator % denominator == 0) {
  //         numerator /= denominator;
  //         denominator--;
  //     }
  // }
  // return numerator;

  let a = m + n - 2,
    b = m - 1,
    c = n - 1,
    factA = 1,
    factB = 1,
    factC = 1;
  while (a) {
    factA *= a--;
  }
  while (b) {
    factB *= b--;
  }
  while (c) {
    factC *= c--;
  }
  return factA / factB / factC;
};
