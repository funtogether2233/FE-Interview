function nextGreaterElements(nums: number[]): number[] {
  const len = nums.length,
    stack: number[] = [],
    res: number[] = new Array(len).fill(-1),
    max_num = Math.max(...nums),
    max_idx = nums.indexOf(max_num);
  for (let i = max_idx + 1; i < len; ++i) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let target = stack.pop() as number;
      res[target] = nums[i];
    }
    stack.push(i);
  }
  for (let i = 0; i <= max_idx; ++i) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let target = stack.pop() as number;
      res[target] = nums[i];
    }
    stack.push(i);
  }
  return res;
}

export default void 0;
