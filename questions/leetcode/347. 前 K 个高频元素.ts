function topKFrequent(nums: number[], k: number): number[] {
  let numsMap: Map<number, number> = new Map();
  for (let num of nums) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }
  return Array.from(numsMap)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((item) => item[0]);
}

export default void 0;
