// 描述
// 实现函数 partialUsingArguments，调用之后满足如下条件：
// 1、返回一个函数 result
// 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
// 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
// 示例1
// 输入：
// 无
// 输出：
// 无
function partialUsingArguments(fn) {
  let arg1 = Array.from(arguments).slice(1);
  return (result = function () {
    return fn.apply(this, arg1.concat(Array.from(arguments)));
  });
}
