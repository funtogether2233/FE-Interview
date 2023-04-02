function myPow(x: number, n: number): number {
  let res = 1,
    abs = Math.abs(n);
  while (abs > 0) {
    // 奇数
    if (abs & 1) {
      res *= x;
    }
    x *= x;
    abs >>>= 1;
  }
  return n > 0 ? res : 1 / res;
}

export default void 0;
