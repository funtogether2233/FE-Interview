function exist(board: string[][], word: string): boolean {
  const words = word.split(""),
    row = board.length,
    col = board[0].length,
    tags: boolean[][] = Array.from(Array(row), () => new Array(col));
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      const flag = dfs(board, words, i, j, 0, tags);
      if (flag) {
        return true;
      }
    }
  }
  return false;

  function dfs(
    board: string[][],
    words: string[],
    i: number,
    j: number,
    k: number,
    tags: boolean[][]
  ): boolean {
    if (k === words.length) {
      return true;
    }
    if (i < 0 || i >= row || j < 0 || j >= col || tags[i][j]) {
      return false;
    }
    let flag = false;
    if (board[i][j] === words[k]) {
      tags[i][j] = true;
      flag = dfs(board, words, i - 1, j, k + 1, tags);
      flag = flag || dfs(board, words, i + 1, j, k + 1, tags);
      flag = flag || dfs(board, words, i, j - 1, k + 1, tags);
      flag = flag || dfs(board, words, i, j + 1, k + 1, tags);
      tags[i][j] = false;
    }
    return flag;
  }
}

export default void 0;
