// 描述
// 请补全JavaScript代码，要求实现Function.bind函数的功能且该新函数命名为"_bind"。
Function.prototype._bind = function (obj = window, ...args) {
  obj.fn = this;
  return function (...args2) {
    return obj.fn(obj, ...[...args, ...args2]);
  };
};
