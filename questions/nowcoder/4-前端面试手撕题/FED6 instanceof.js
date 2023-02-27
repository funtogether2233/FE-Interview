// 描述
// 请补全JavaScript代码，要求以Boolean的形式返回第一个实例参数是否在第二个函数参数的原型链上。
const _instanceof = (target, Fn) => {
  // 补全代码
  //   return Fn.prototype.isPrototypeOf(target);
  if (target === null || typeof target !== "object") {
    return false;
  }
  //获取第一个原型
  let targetProto = Object.getPrototypeOf(target);
  while (targetProto !== null) {
    //和第二个原型进行比较
    if (targetProto == Fn.prototype) {
      return true;
    }
    targetProto = Object.getPrototypeOf(targetProto);
  }
  return false;
};
