// 描述
// 请补全JavaScript代码，要求实现new操作符的功能。
const _objectFreeze = (object) => {
  // 补全代码
  let props = Object.getOwnPropertyNames(object);
  for (let prop of props) {
    const des = Object.getOwnPropertyDescriptor(object, prop);
    if (des.get || des.set) {
      Object.defineProperty(object, prop, {
        configurable: false,
        get: des.get,
        set: des.set,
      });
    } else {
      Object.defineProperty(object, prop, {
        writable: false,
        configurable: false,
      });
    }
  }
  return Object.preventExtensions(object);
  // return Object.seal(object)
};
