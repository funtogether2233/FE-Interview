/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    maxV = 0;
  while (l < r) {
    let h = height[l] < height[r] ? height[l] : height[r];
    maxV = Math.max(maxV, h * (r - l));
    while (height[l] <= h && l < r) {
      ++l;
    }
    while (height[r] <= h && l < r) {
      --r;
    }
  }
  return maxV;
};
