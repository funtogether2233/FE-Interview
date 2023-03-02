// 描述
// 请补全JavaScript代码，要求实现Object.create函数的功能且该新函数命名为"_objectCreate"。
const _objectCreate = (proto) => {
  // 补全代码
  //   return ((() => {}).prototype = proto);
  let obj = new Object();
  obj.prototype = proto;
  return obj;
};
