// 描述
// 请补全JavaScript代码，要求去除数组参数中的重复数字项并返回该数组。
// 注意：
// 1. 数组元素仅包含数字
// 示例1
// 输入：
// _deleteRepeat([-1,1,2,2])
// 输出：
// [-1,1,2]

const _deleteRepeat = (array) => {
  // 补全代码
  return Array.from(new Set(array));
  //   let newArr = [];
  //   array.forEach((item) => {
  //     if (newArr.indexOf(item) === -1) {
  //       newArr.push(item);
  //     }
  //   });
  //   return newArr;
};
