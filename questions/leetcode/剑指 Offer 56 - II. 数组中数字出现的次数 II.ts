function singleNumber(nums: number[]): number {
  let n1 = 0;
  let n2 = 0;
  for (const i of nums) {
    n1 ^= (i & ~n2);
    n2 ^= (i & ~n1);
  }
  return n1;
}

export default void 0;
