// 描述
// 请补全JavaScript函数，要求返回数字参数的阶乘。
// 注意：参数为大于等于0的整数。
function _factorial(number) {
  let res = 1;
  while (number !== 0) {
    res *= number;
    number--;
  }
  return res;
}
