// 描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 示例1
// 输入：
// ['a','b','c','d','e','f','a','b','c'] 'a'
// 输出：
// [0, 6]
function findAllOccurrences(arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      res.push(i);
    }
  }
  return res;
}
