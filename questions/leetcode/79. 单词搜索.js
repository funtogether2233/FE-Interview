/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length,
    w = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = new Array(h);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(w).fill(false);
  }
  const check = (i, j, k) => {
    if (board[i][j] != word[k]) {
      return false;
    } else if (k == word.length - 1) {
      return true;
    }
    visited[i][j] = true;
    for (const [dx, dy] of directions) {
      let newi = i + dx,
        newj = j + dy;
      if (
        newi >= 0 &&
        newi < h &&
        newj >= 0 &&
        newj < w &&
        !visited[newi][newj] &&
        check(newi, newj, k + 1)
      ) {
        return true;
      }
    }
    visited[i][j] = false;
    return false;
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (check(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
