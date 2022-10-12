/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 额外数组
  // const n = nums.length;
  // const newArr = new Array(n);
  // for (let i = 0; i < n; ++i) {
  //     newArr[(i + k) % n] = nums[i];
  // }
  // for (let i = 0; i < n; ++i) {
  //     nums[i] = newArr[i];
  // }
  // 环状替换
  // const gcd = (x, y) => y ? gcd(y, x % y) : x;
  // const n = nums.length;
  // k = k % n;
  // let count = gcd(k, n);
  // for (let start = 0; start < count; ++start) {
  //     let current = start;
  //     let prev = nums[start];
  //     do {
  //         const next = (current + k) % n;
  //         const temp = nums[next];
  //         nums[next] = prev;
  //         prev = temp;
  //         current = next;
  //     } while (start !== current);
  // }
  // 数组翻转
  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
