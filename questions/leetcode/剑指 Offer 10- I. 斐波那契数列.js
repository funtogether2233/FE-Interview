/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 动态规划
  // const MOD = 1000000007;
  // if (n < 2) {
  //     return n;
  // }
  // let p = 0, q = 0, r = 1;
  // for (let i = 2; i <= n; ++i) {
  //     p = q;
  //     q = r;
  //     r = (p + q) % MOD;
  // }
  // return r;

  // 矩阵快速幂
  if (n < 2) {
    return n;
  }
  const pow = (a, n) => {
    let ret = [
      [1, 0],
      [0, 1],
    ];
    while (n > 0) {
      if ((n & 1) === 1) {
        ret = multiply(ret, a);
      }
      n >>= 1;
      a = multiply(a, a);
    }
    return ret;
  };
  const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        c[i][j] =
          (BigInt(a[i][0]) * BigInt(b[0][j]) +
            BigInt(a[i][1]) * BigInt(b[1][j])) %
          BigInt(1000000007);
      }
    }
    return c;
  };
  const q = [
    [1, 1],
    [1, 0],
  ];
  const res = pow(q, n - 1);
  return res[0][0];
};
