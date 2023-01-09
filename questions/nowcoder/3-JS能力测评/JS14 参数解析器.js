// 描述
// 请补全JavaScript代码，要求将字符串参数URL中的参数解析并以对象的形式返回。
// 示例1
// 输入：
// getParams('https://nowcoder.com/online?id=1&salas=1000')
// 输出：
// { id: 1, salas: 100 }
const _getParams = (url) => {
  const obj = {};
  const params = url.split("?")[1].split("&");
  for (const item of params) {
    const [key, value] = [...item.split("=")];
    obj[key] = value;
  }
  return obj;
};
