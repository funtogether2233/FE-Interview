// 描述
// 请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。
// 示例1
// 输入：
// _comma(12300)
// 输出：
// '12,300'
function _comma(number) {
  let a = "";
  if (number < 0) {
    number = Math.abs(number);
    a += "-";
  }
  let str = number.toString().split("");
  for (let i = str.length - 3; i > 0; ) {
    str.splice(i, 0, ",");
    i -= 3;
  }
  return a + str.join("");
}
