/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  const n = matrix.length - 1,
    mid = Math.floor(n / 2);
  for (let i = 0; i <= mid; i++) {
    for (let j = 0; j <= n; j++) {
      [matrix[i][j], matrix[n - i][j]] = [matrix[n - i][j], matrix[i][j]];
    }
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

export default void 0;
