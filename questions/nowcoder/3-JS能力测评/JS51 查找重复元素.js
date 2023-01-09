// 描述
// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
// 示例1
// 输入：
// [1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出：
// [1, 3, 4]
function duplicates(arr) {
  let arrItem = new Set(),
    res = new Set();
  for (const item of arr) {
    if (arrItem.has(item)) {
      res.add(item);
    } else {
      arrItem.add(item);
    }
  }
  return [...res];
}
