// 描述
// 请补全JavaScript代码，请给参数对象添加拦截代理功能并返回这个代理。要求如下：
// 1. 该函数接收多个参数，首个参数为对象，从第二个参数（包括）往后皆是该对象的属性名
// 2. 通过该函数给首个参数对象添加拦截器功能，每当该对象访问到该函数第二个参数（包括）往后的属性时，返回"noright"字符串，表示无权限。
const _proxy = (object, ...prototypes) => {
  return new Proxy(object, {
    get: function (obj, prop) {
      return [...prototypes].includes(prop) ? "noright" : obj[prop];
    },
  });
};
