// 描述
// 计算并返回给定数组 arr 中所有元素的总和
// 输入描述：
// [ 1, 2, 3, 4 ]
// 输出描述：
// 10
// 示例1
// 输入：
// [ 1, 2, 3, 4 ]
// 输出：
// 10
function sum(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0);
}
