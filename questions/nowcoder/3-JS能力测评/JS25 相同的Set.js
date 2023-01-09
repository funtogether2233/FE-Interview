// 描述
// 请补全JavaScript代码，要求以boolean的形式返回两个Set对象参数是否一样，是则返回true，否则返回false。
const _isSameSet = (s1, s2) => {
  if (s1.size !== s2.size) {
    return false;
  }
  return Array.from(s1).sort().join("") === Array.from(s2).sort().join("");
};
