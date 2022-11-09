// 描述
// 请补全JavaScript代码，完成函数的接口功能。要求如下：
// 1. 函数接收两种类型的参数，分别为"get?"和"update?name=xxx&to=yyy"，"name"、"to"为参数，"xxx"、"yyy"分别为参数对应的值。
// 2. 当参数为"get?"时，返回data数据
// 3. 当参数为"update?name=xxx&to=yyy"时，将data中所有"name"为"xxx"的项，更改为"name"值为"yyy"
let data = [{ name: "nowcoder1" }, { name: "nowcoder2" }];

const _api = (string) => {
  let arr = string.split("?");
  if (arr[0] === "get") {
    return data;
  }
  if (arr[0] === "update") {
    let b = {};
    let a = arr[1].split("&");
    a.forEach((item) => {
      let [key, value] = item.split("=");
      b[key] = value;
    });
    data.forEach((item, index) => {
      if (item.name === b.name) {
        item.name = b.to;
      }
    });
  }
};
