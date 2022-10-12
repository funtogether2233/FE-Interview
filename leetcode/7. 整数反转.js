/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  x = -11;
  while (x) {
    res = res * 10 + (x % 10);
    x = ~~(x / 10);
    // if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    //     return 0;
    // }
    if (res < -2147483648 || res > 2147483647) {
      return 0;
    }
  }
  return res;
};
