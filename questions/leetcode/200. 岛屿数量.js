/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const row = grid.length,
    col = grid[0].length;
  let res = 0;
  const dfs = (grid, r, c) => {
    if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  return res;
};
