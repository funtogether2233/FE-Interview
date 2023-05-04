function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length,
    cols = matrix[0].length;
  const dp = Array.from(Array(rows), () => new Array(cols).fill(0));
  let maxSide = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (matrix[i][j] !== "1") {
        continue;
      }
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
      }
      maxSide = Math.max(maxSide, dp[i][j]);
    }
  }
  return maxSide * maxSide;
}

export default void 0;
