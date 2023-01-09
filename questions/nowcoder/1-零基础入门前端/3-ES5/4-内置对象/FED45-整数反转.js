// 描述
// 请补全JavaScript函数，要求将整数参数反转之后输出。
// 示例：
// 1. _reverse(0) -> 0
// 2. _reverse(233) -> 332
// 3. _reverse(-223) -> -322
function _reverse(number) {
  return Number(Array.from(String(number)).reverse().join(""));
}
