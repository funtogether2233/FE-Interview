/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let res = [],
    left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
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
    ++left, --right, ++top, --bottom;
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
};
