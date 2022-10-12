/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let n = board.length;
  if (n == 0) {
    return;
  }
  let m = board[0].length;

  const dfs = (board, x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] != "O") {
      return;
    }
    board[x][y] = "A";
    dfs(board, x + 1, y);
    dfs(board, x - 1, y);
    dfs(board, x, y + 1);
    dfs(board, x, y - 1);
  };

  for (let i = 0; i < n; i++) {
    dfs(board, i, 0);
    dfs(board, i, m - 1);
  }
  for (let j = 1; j < m - 1; j++) {
    dfs(board, 0, j);
    dfs(board, n - 1, j);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == "A") {
        board[i][j] = "O";
      } else if (board[i][j] == "O") {
        board[i][j] = "X";
      }
    }
  }
};
