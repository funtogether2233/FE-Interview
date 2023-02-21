function permute(nums: number[]): number[][] {
  let res: number[][] = [],
    output = Array.from(nums);
  const backtrack = (n: number, first: number): void => {
    if (first == n) {
      res.push(Array.from(output));
      return;
    }
    for (let i = first; i < n; i++) {
      [output[first], output[i]] = [output[i], output[first]];
      backtrack(n, first + 1);
      [output[first], output[i]] = [output[i], output[first]];
    }
  };
  backtrack(output.length, 0);
  return res;
}

export default void 0;
