/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let yh = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(yh[i - 1][j - 1] + yh[i - 1][j]);
      }
    }
    yh.push(row);
  }
  return yh;
};
