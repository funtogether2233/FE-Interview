// 描述
// 根据包名，在指定空间中创建对象
// 输入描述：
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述：
// {a: {test: 1, b: {c: {d: {}}}}}
function namespace(oNamespace, sPackage) {
  let arr = sPackage.split(".");
  let pointer = oNamespace;
  for (let i = 0; i < arr.length; i++) {
    // 如果为undefined或者不是对象则赋值为空对象
    if (!pointer[arr[i]] || typeof pointer[arr[i]] !== "object") {
      pointer[arr[i]] = {};
    }
    pointer = pointer[arr[i]];
  }
  return oNamespace;

  // sPackage.split('.').reduce((pre,cur) => pre[cur]||(pre[cur]={}), oNamespace);
  // return oNamespace;
}
