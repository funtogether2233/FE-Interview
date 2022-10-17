// 描述
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
// 示例1
// 输入：
// 65
// 输出：
// 01000001
function convertToBinary(num) {
  //   let str = num.toString(2);
  //   let l = str.length;
  //   if (l < 8) {
  //     const zero8 = "00000000";
  //     str = zero8.slice(0, 8 - l) + str;
  //   }
  //   return str;
  return ("00000000" + num.toString(2)).slice(-8);
}
