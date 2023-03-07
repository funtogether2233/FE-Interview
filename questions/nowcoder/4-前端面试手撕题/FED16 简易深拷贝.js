// 描述
// 请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象。
// 注意：
// 1. 参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中]
// 2. 无需考虑循环引用问题
const _sampleDeepClone = (target) => {
  // 补全代码
  // return JSON.parse(JSON.stringify(target))
  if (typeof target !== "object" || target === null) {
    return target;
  }
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _sampleDeepClone(target[prop]);
    }
  }
  return cloneTarget;
};
