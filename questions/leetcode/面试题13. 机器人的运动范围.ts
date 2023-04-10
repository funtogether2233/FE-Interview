function movingCount(m: number, n: number, k: number): number {
  const visit: boolean[][] = Array.from(Array(m), () =>
    new Array(n).fill(false)
  );
  let res = 0;
  dfs(0, 0);
  return res;

  function dfs(i: number, j: number) {
    if (!inArea(i, j) || visit[i][j] || !isReach(i, j)) {
      return;
    }
    ++res;
    visit[i][j] = true;
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i - 1, j);
    dfs(i, j - 1);
  }

  function inArea(i: number, j: number): boolean {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  function isReach(i: number, j: number): boolean {
    let temp = 0;
    while (i > 0) {
      temp += i % 10;
      i = Math.floor(i / 10);
    }
    while (j > 0) {
      temp += j % 10;
      j = Math.floor(j / 10);
    }
    return temp <= k;
  }
}

export default void 0;
