/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const quickMul = (x, n) => {
    let ans = 1;
    // 在对 n 进行二进制拆分的同时计算答案
    while (n > 0) {
      if (n % 2 == 1) {
        ans *= x;
      }
      x *= x;
      n = Math.floor(n / 2);
    }
    return ans;
  };
  return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
  // return x**n;
  // return Math.pow(x,n);
};
