function findContinuousSequence(target: number): number[][] {
  const res: number[][] = [];
  let left = 1,
    right = 2,
    sum = 0;
  while (left < right) {
    sum = ((left + right) * (right - left + 1)) / 2;
    if (sum === target) {
      res.push(setArray(left, right + 1));
      ++left;
    } else if (sum > target) {
      ++left;
    } else if (sum < target) {
      ++right;
    }
  }
  return res;

  function setArray(start: number, end: number) {
    const res: number[] = [];
    for (; start < end; ++start) {
      res.push(start);
    }
    return res;
  }
}

export default void 0;
