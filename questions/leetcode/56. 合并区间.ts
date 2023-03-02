function merge(intervals: number[][]): number[][] {
  const left = 0,
    right = 1;
  intervals.sort((a, b) => a[left] - b[left]);
  let prev = intervals[0],
    res: number[][] = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][left] > prev[right]) {
      res.push(prev);
      prev = intervals[i];
    } else {
      prev[right] = Math.max(intervals[i][right], prev[right]);
    }
  }
  res.push(prev);
  return res;
}

export default void 0;
