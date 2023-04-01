function cuttingRope(n: number): number {
  if (n <= 3) {
    return n - 1;
  }
  const a = Math.floor(n / 3),
    b = n % 3;
  if (b === 0) {
    return Math.pow(3, a);
  }
  if (b === 1) {
    return Math.pow(3, a - 1) * (2 * 2);
  }
  // b === 2
  return Math.pow(3, a) * 2;
}

export default void 0;
