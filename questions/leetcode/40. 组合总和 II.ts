function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res: number[][] = [],
    path: number[] = [];
  backTracking(target, 0);
  return res;

  function backTracking(sum: number, startIndex: number) {
    if (sum === 0) {
      res.push(path.slice(0));
      return;
    }
    for (let index = startIndex; index < candidates.length; ++index) {
      if (sum - candidates[index] < 0) {
        return;
      }
      if (index > startIndex && candidates[index] === candidates[index - 1]) {
        continue;
      }
      path.push(candidates[index]);
      backTracking(sum - candidates[index], index + 1);
      path.pop();
    }
  }
}

export default void 0;
