function findDiagonalOrder(mat: number[][]): number[] {
  const res: number[] = [],
    rowLength = mat.length,
    colLength = mat[0].length;
  let row = 0,
    column = 0,
    direction = [-1, 1];
  while (true) {
    res.push(mat[row][column]);
    let tempRow = row + direction[0],
      tempColumn = column + direction[1];
    if (
      tempRow >= 0 &&
      tempRow < rowLength &&
      tempColumn >= 0 &&
      tempColumn < colLength
    ) {
      row = tempRow;
      column = tempColumn;
    } else {
      direction = direction.map((value) => -value);
      if (row === rowLength - 1 && column === colLength - 1) {
        break;
      } else if (row === rowLength - 1) {
        ++column;
      } else if (column === colLength - 1) {
        ++row;
      } else if (row === 0) {
        ++column;
      } else {
        ++row;
      }
    }
  }
  return res;
}

export default void 0;
