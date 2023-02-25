function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [],
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;
  while (left < right && top < bottom) {
    let i = top,
      j = left;
    while (j < right) {
      res.push(matrix[i][j++]);
    }
    while (i < bottom) {
      res.push(matrix[i++][j]);
    }
    while (j > left) {
      res.push(matrix[i][j--]);
    }
    while (i > top) {
      res.push(matrix[i--][j]);
    }
    ++top, --right, --bottom, ++left;
  }
  if (left === right) {
    while (top <= bottom) {
      res.push(matrix[top++][left]);
    }
  } else if (top === bottom) {
    while (left <= right) {
      res.push(matrix[top][left++]);
    }
  }
  return res;
}

export default void 0;
