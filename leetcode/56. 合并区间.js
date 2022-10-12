/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0],
    res = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > prev[1]) {
      res.push(prev);
      prev = intervals[i];
    } else {
      prev[1] = Math.max(intervals[i][1], prev[1]);
    }
  }
  res.push(prev);
  return res;
};
