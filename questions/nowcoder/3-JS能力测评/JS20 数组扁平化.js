// 描述
// 请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
// 注意：
// 1. 数组参数中仅包含数组类型和数字类型
// 示例1
// 输入：
// [1,[2,[3,[4]]]]
// 复制
// 输出：
// [1,2,3,4]
const _flatten = (arr) => {
  // return arr.toString().split(',').map(item => Number(item));

  let res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(_flatten(item));
    } else {
      res.push(item);
    }
  }
  return res;
};
