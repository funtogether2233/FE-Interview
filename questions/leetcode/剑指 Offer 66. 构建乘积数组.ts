function constructArr(a: number[]): number[] {
  const length = a.length,
    res = new Array(length).fill(1);
  let cache = 1;
  for (let i = 1; i < length; i++) {
    cache *= a[i - 1];
    res[i] = cache;
  }
  cache = 1;
  for (let i = length - 1; i > 0; i--) {
    cache *= a[i];
    res[i - 1] *= cache;
  }
  return res;
}

export default void 0;
