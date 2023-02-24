function numIslands(grid: string[][]): number {
  let res = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === "1") {
        ++res;
        cleanGrid(grid, i, j);
      }
    }
  }
  return res;

  function cleanGrid(grid: string[][], i: number, j: number): void {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    cleanGrid(grid, i - 1, j);
    cleanGrid(grid, i, j + 1);
    cleanGrid(grid, i + 1, j);
    cleanGrid(grid, i, j - 1);
  }
}

export default void 0;
