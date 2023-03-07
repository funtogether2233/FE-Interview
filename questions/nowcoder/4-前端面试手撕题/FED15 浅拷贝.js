// 描述
// 请补全JavaScript代码，要求实现一个对象参数的浅拷贝并返回拷贝之后的新对象。
// 注意：
// 1. 参数可能包含函数、正则、日期、ES6新对象
const _shallowClone = (target) => {
  // 补全代码
  // return Object.assign({}, target)
  // 基本数据类型
  if (typeof target !== "object" || target === null) {
    return target;
  }
  // 函数，日期正则，直接返回
  const str = Object.prototype.toString.call(target);
  if (
    str === "[object Date]" ||
    str === "[object RegExp]" ||
    str === "[object Function]"
  ) {
    return target;
  }

  const cloneTarget = Array.isArray(target) ? [] : {};
  Object.keys(target).forEach((key) => {
    cloneTarget[key] = target[key];
  });
  return cloneTarget;
};
