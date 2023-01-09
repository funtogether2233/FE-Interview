// 描述
// 请补全JavaScript代码，要求以boolean的形式返回参数字符串是否为回文字符串。
const _isPalindrome = (string) => {
  return string === string.split("").reverse().join("");
};
