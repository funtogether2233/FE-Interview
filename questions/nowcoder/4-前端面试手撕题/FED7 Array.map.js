// 描述
// 请补全JavaScript代码，要求实现Array.map函数的功能且该新函数命名为"_map"。
// 示例1
// 输入：
// [1,2]._map(i => i * 2)
// 输出：
// [2,4]
Array.prototype._map = function (fn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i]));
  }
  return res;
};
