function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let length = nums1.length + nums2.length;
  if (length % 2 === 1) {
    let midIndex = length >> 1;
    return getKthElement(nums1, nums2, midIndex + 1);
  } else {
    let midIndex1 = (length >> 1) - 1,
      midIndex2 = length >> 1;
    return (
      (getKthElement(nums1, nums2, midIndex1 + 1) +
        getKthElement(nums1, nums2, midIndex2 + 1)) /
      2
    );
  }

  function getKthElement(nums1: number[], nums2: number[], k: number): number {
    let length1 = nums1.length,
      length2 = nums2.length,
      index1 = 0,
      index2 = 0;
    while (true) {
      if (index1 === length1) {
        return nums2[index2 + k - 1];
      }
      if (index2 === length2) {
        return nums1[index1 + k - 1];
      }
      if (k === 1) {
        return Math.min(nums1[index1], nums2[index2]);
      }
      let half = k >> 1,
        newIndex1 = Math.min(index1 + half, length1) - 1,
        newIndex2 = Math.min(index2 + half, length2) - 1,
        pivot1 = nums1[newIndex1],
        pivot2 = nums2[newIndex2];
      if (pivot1 <= pivot2) {
        k -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1;
      } else {
        k -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
  }
}

export default void 0;
