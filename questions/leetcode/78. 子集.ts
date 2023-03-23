function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];
  dfs([], nums);
  return res;

  function dfs(curPath: number[], choices: number[]) {
    if (curPath.length === nums.length) {
      return;
    }
    for (let i = 0; i < choices.length; ++i) {
      curPath.push(choices[i]);
      res.push([...curPath]);
      dfs(curPath, choices.slice(i + 1));
      curPath.pop();
    }
  }
}

export default void 0;
