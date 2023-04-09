function sumNums(n: number): number {
  let x = n > 1 && (n += sumNums(n - 1)) > 0;
  return n;
}

export default void 0;
