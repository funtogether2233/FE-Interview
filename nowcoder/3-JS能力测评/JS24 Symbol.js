// 描述
// 请补全JavaScript代码，要求以键/值对的对象形式返回参数数组。要求如下：
// 1. 键名的数据类型为Symbol
// 2. 键值为当前数组项
// 3. Symbol的描述为当前数组项
// 4. 返回普通对象
const _symbolKey = (array) => {
  let obj = {};
  array.forEach((v) => {
    obj[Symbol(v)] = v;
  });
  return obj;
};
