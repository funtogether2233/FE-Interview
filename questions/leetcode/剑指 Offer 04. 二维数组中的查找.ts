function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j <= matrix[0].length - 1) {
    const value = matrix[i][j];
    if (target > value) {
      j++;
    } else if (target < value) {
      i--;
    } else {
      return true;
    }
  }
  return false;
}

export default void 0;
