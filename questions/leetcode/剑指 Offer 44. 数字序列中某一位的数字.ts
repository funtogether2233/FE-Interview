function findNthDigit(n: number): number {
  let digits = 1,
    startNum = 1,
    range = startNum * digits * 9;
  while (n > range) {
    n -= range;
    digits += 1;
    startNum *= 10;
    range = startNum * digits * 9;
  }
  const num = startNum + Math.floor((n - 1) / digits);
  const offset = (n - 1) % digits;
  return Number(num.toString()[offset]);
}

export default void 0;
