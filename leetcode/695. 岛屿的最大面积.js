/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const row = grid.length,
    col = grid[0].length;
  const dfs = (x, y) => {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) {
      return 0;
    }
    grid[x][y] = 0;
    return dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1) + 1;
  };
  let res = 0;
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }
  return res;
};
