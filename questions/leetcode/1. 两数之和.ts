function twoSum(nums: number[], target: number): number[] {
  const hashtable: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (hashtable.has(target - nums[i])) {
      return [hashtable.get(target - nums[i]) as number, i];
    }
    hashtable.set(nums[i], i);
  }
  return [];
}
