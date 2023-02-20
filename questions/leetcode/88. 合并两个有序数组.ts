/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  --m, --n;
  for (let i = m + n + 1; i >= 0; --i) {
    if (m >= 0 && n >= 0) {
      nums1[i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    } else if (n >= 0) {
      for (let j = 0; j <= n; ++j) {
        nums1[j] = nums2[j];
      }
      break;
    } else {
      break;
    }
  }
}

export default void 0;
