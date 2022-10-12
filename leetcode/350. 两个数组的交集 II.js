/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let ans = [];
  const cmp = (a, b) => a - b;
  nums1.sort(cmp), nums2.sort(cmp);
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      ++i, ++j;
    } else if (nums1[i] < nums2[j]) {
      ++i;
    } else {
      ++j;
    }
  }
  return ans;
};
