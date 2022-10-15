/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 移位实现位计数
  // let s = x ^ y, ret = 0;
  // while (s != 0) {
  //     ret += s & 1;
  //     s >>= 1;
  // }
  // return ret;

  // Brian Kernighan 算法
  let s = x ^ y,
    ret = 0;
  while (s != 0) {
    s &= s - 1;
    ret++;
  }
  return ret;
};
