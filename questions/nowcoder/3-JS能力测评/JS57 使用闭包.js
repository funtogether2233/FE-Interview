// 描述
// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

// 示例：
// var arr = [1,2,3];
// var fn = function (x) {
//     return x * x;
// }
// var result = makeClosures(arr,fn);
// (result[1]() === 4) === (fn(arr[1]) === 4) === true
function makeClosures(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(function () {
      return fn(item);
    });
  }
  // 这里迭代不能用var
  //   for (let i = 0; i < arr.length; ++i) {
  //     result.push(function () {
  //       return fn(item);
  //     });
  //   }
  return result;
}
