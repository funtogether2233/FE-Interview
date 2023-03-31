function reverseLeftWords(s: string, n: number): string {
  const frontStr = s.slice(0, n);
  const backStr = s.slice(n);
  return backStr + frontStr;
}

export default void 0;
