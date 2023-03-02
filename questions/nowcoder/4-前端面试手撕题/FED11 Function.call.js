// 描述
// 请补全JavaScript代码，要求实现Function.call函数的功能且该新函数命名为"_call"。
Function.prototype._call = function (obj = window, ...args) {
  obj.fn = this;
  let res = obj.fn(...args);
  delete obj.fn;
  return res;
};
