function intersection(nums1: number[], nums2: number[]): number[] {
  // let res: number[] = [];
  // nums1.sort((a, b) => a - b);
  // nums2.sort((a, b) => a - b);
  // if (nums1.length !== 0 && nums2.length !== 0) {
  //   if (nums2.includes(nums1[0])) {
  //     res.push(nums1[0]);
  //   }
  // }
  // for (let i = 1; i < nums1.length; ++i) {
  //   if (nums1[i] !== nums1[i - 1] && nums2.includes(nums1[i])) {
  //     res.push(nums1[i]);
  //   }
  // }
  // return res;

  const hashSet = new Set(nums1),
    res = new Set<number>();
  for (const num of nums2) {
    if (hashSet.has(num)) {
      res.add(num);
    }
  }
  return [...res];
}

export default void 0;
