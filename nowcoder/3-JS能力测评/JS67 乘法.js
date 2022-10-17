// 描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
// 示例1
// 输入：
// 3, 0.0001
// 复制
// 输出：
// 0.0003
function multiply(a, b) {
  const astr = a.toString(),
    bstr = b.toString(),
    al = astr.slice(astr.indexOf(".") + 1).length,
    bl = bstr.slice(bstr.indexOf(".") + 1).length;
  a *= Math.pow(10, al);
  b *= Math.pow(10, bl);
  return (a * b) / Math.pow(10, al + bl);
}
