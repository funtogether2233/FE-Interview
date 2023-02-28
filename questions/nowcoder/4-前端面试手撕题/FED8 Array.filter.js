// 描述
// 请补全JavaScript代码，要求实现Array.filter函数的功能且该新函数命名为"_filter"。
// 示例1
// 输入：
// [1,2]._filter(i => i>1)
// 输出：
// [2]
Array.prototype._filter = function (fn) {
  const res = [];
  for (const item of this) {
    if (fn(item)) {
      res.push(item);
    }
  }
  return res;
};
