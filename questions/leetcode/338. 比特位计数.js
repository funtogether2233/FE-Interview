/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // Brian Kernighan 算法
  // const bits = new Array(n + 1).fill(0);
  // for (let i = 0; i <= n; i++) {
  //     let ones = 0, x = i;
  //     while (x > 0) {
  //         x &= (x - 1);
  //         ones++;
  //     }
  //     bits[i] = ones;
  // }
  // return bits;

  // 动态规划——最高有效位
  // const bits = new Array(n + 1).fill(0);
  // let highBit = 0;
  // for (let i = 1; i <= n; i++) {
  //     if ((i & (i - 1)) === 0) {
  //         highBit = i;
  //     }
  //     bits[i] = bits[i - highBit] + 1;
  // }
  // return bits;

  // 动态规划——最低有效位
  // const bits = new Array(n + 1).fill(0);
  // for (let i = 1; i <= n; i++) {
  //     bits[i] = bits[i >> 1] + (i & 1);
  // }
  // return bits;

  // 动态规划——最低设置位
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};
