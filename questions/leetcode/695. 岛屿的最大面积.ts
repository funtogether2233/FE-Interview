function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length,
    col = grid[0].length;
  let res = 0;
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      if (grid[i][j] === 1) {
        const area = getArea(grid, row, col, i, j);
        res = Math.max(res, area);
      }
    }
  }
  return res;

  function getArea(
    grid: number[][],
    row: number,
    col: number,
    i: number,
    j: number
  ): number {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) {
      return 0;
    }
    grid[i][j] = 0;
    return (
      getArea(grid, row, col, i - 1, j) +
      getArea(grid, row, col, i, j + 1) +
      getArea(grid, row, col, i + 1, j) +
      getArea(grid, row, col, i, j - 1) +
      1
    );
  }
}

export default void 0;
