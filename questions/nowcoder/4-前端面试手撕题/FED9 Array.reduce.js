// 描述
// 请补全JavaScript代码，要求实现Array.reduce函数的功能且该新函数命名为"_reduce"。
// 示例1
// 输入：
// [1,2,3]._reduce((left, right) => left + right)
// 输出：
// 6
Array.prototype._reduce = function (fn, prev) {
  for (let i = 0; i < this.length; ++i) {
    if (prev === undefined) {
      prev = fn(this[i], this[i + 1], i + 1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev;
};
