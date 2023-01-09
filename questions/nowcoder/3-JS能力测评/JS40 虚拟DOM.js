// 描述
// 请补全JavaScript代码，要求将对象参数转换为真实的DOM结构并返回。
// 注意：
// 1. tag为标签名称、props为属性、children为子元素、text为标签内容
var vnode = {
  tag: "ul",
  props: {
    class: "list",
  },
  text: "",
  children: [
    {
      tag: "li",
      props: {
        class: "item",
      },
      text: "",
      children: [
        {
          tag: undefined,
          props: {},
          text: "牛客网",
          children: [],
        },
      ],
    },
    {
      tag: "li",
      props: {},
      text: "",
      children: [
        {
          tag: undefined,
          props: {},
          text: "nowcoder",
          children: [],
        },
      ],
    },
  ],
};
const _createElm = (vnode) => {
  let { tag, props, text, children } = vnode;
  let dom;
  if (typeof tag === "string") {
    dom = document.createElement(tag);
    for (let prop in props) {
      dom.setAttribute(prop, props[prop]);
    }
    dom.innerText = text;
    if (children.length) {
      children.forEach((child) => dom.appendChild(_createElm(child)));
    }
  } else {
    dom = document.createTextNode(text);
  }
  return dom;
};
