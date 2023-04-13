function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [],
    path: number[] = [];
  backtrack(0, target);
  return res;

  function backtrack(start: number, target: number) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...path]);
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, target - candidates[i]);
      path.pop();
    }
  }
}

export default void 0;
