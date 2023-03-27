/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  // 如果 n & 1 = 0,则n的二进制最后一位是0，如果 n & 1 = 1, 则n的二进制最后一位为1
  while (n !== 0) {
    res += n & 1;
    n >>>= 1;
  }
  return res;
};
