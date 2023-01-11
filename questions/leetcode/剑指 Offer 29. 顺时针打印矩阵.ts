function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length,
    columns = matrix[0].length;
  const res: number[] = [];
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; ++column) {
      res.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; ++row) {
      res.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; --column) {
        res.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; --row) {
        res.push(matrix[row][left]);
      }
    }
    ++left, --right, ++top, --bottom;
  }
  return res;
}

export default void 0;
