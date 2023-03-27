function printNumbers(n: number): number[] {
  const maxNum: number = Math.pow(10, n),
    res: number[] = [];
  for (let i = 1; i < maxNum; i++) {
    res.push(i);
  }
  return res;
}

export default void 0;
