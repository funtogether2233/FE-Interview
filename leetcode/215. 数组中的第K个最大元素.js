/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  //   nums.sort((a, b) => a - b);
  //   return nums[nums.length - k];
  // 第二次写，快排
  // return quickSelect(nums, 0, nums.length - 1, nums.length - k);

  // function quickSelect(a, l, r, index) {
  //     let q = randomPartition(a, l, r);
  //     if (q === index) {
  //         return a[q];
  //     } else {
  //         return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);
  //     }
  // }

  // function randomPartition(a, l, r) {
  //     let rd = Math.floor(Math.random() * (r - l) + l);
  //     [a[rd], a[r]] = [a[r], a[rd]];
  //     let i = l - 1;
  //     for (let j = l; j < r; ++j) {
  //         if (a[j] <= a[r]) {
  //             ++i;
  //             [a[i], a[j]] = [a[j], a[i]];
  //         }
  //     }
  //     ++i;
  //     [a[i], a[r]] = [a[r], a[i]];
  //     return i;
  // }

  // 第二次写，堆排
  let heapSize = nums.length;
  // 建堆
  for (let i = Math.floor(heapSize / 2); i >= 0; --i) {
    maxHeapify(nums, i, heapSize);
  }
  for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    --heapSize;
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];

  function maxHeapify(a, i, heapSize) {
    let l = i * 2 + 1,
      r = i * 2 + 2,
      largest = i;
    if (l < heapSize && a[l] > a[largest]) {
      largest = l;
    }
    if (r < heapSize && a[r] > a[largest]) {
      largest = r;
    }
    if (largest != i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      maxHeapify(a, largest, heapSize);
    }
  }
};
