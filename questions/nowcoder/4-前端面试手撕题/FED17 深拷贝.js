// 描述
// 请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象。
// 注意：
// 1. 需要考虑函数、正则、日期、ES6新对象
// 2. 需要考虑循环引用问题
const _completeDeepClone = (target, map = new Map()) => {
  // 补全代码
  if (target === null) {
    return target;
  }
  if (typeof target !== "object") {
    return target;
  }
  const constructor = target.constructor;
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) {
    return new constructor(target);
  }
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, true);
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _completeDeepClone(target[prop], map);
    }
  }
  return cloneTarget;
};
