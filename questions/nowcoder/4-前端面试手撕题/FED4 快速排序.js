// 描述
// 请补全JavaScript代码，要求将数组参数中的数字从小到大进行排序并返回该数组。
// 注意：
// 1. 数组元素仅包含数字
// 2. 请优先使用快速排序方法
// 示例1
// 输入：
// _quickSort([0,-1,1,-2,2])
// 输出：
// [-2,-1,0,1,2]

const _quickSort = (array) => {
  // 补全代码
  quickSort(array, 0, array.length - 1);
  return array;

  function quickSort(arr, left, right) {
    if (left >= right) {
      return;
    }
    let pivot = Math.floor(Math.random() * (right - left) + left);
    [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    let i = left,
      j = right - 1;
    while (true) {
      while (arr[i] < arr[right]) {
        ++i;
      }
      while (arr[j] > arr[right]) {
        --j;
      }
      if (i >= j) {
        break;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ++i, --j;
    }
    [arr[right], arr[i]] = [arr[i], arr[right]];
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
};
