// 描述
// 请补全JavaScript代码，要求找到参数数组中出现频次最高的数据类型，并且计算出出现的次数，要求以数组的形式返回。
// 注意：
// 1. 基本数据类型之外的任何引用数据类型皆为"object"
// 2. 当多种数据类型出现频次相同时将结果拼接在返回数组中，出现次数必须在数组的最后
// 示例1
// 输入：
// __findMostType([0,0,'',''])
// 复制
// 输出：
// ['number','string',2]或['string','number',2]
const _findMostType = (array) => {
  let obj = {},
    num = 0,
    res = [];
  for (let i = 0; i < array.length; i++) {
    let type = typeof array[i];
    if (obj[type]) {
      obj[type]++;
    } else {
      obj[type] = 1;
    }
    num = Math.max(obj[type], num);
  }
  for (key in obj) {
    if (obj[key] === num) {
      res.push(key);
    }
  }
  return [...res, num];
};
