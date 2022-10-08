// 描述
// 请补全JavaScript函数，要求以字符串的形式返回数字参数所对应的星期。
// 示例：
// 1. _getday(1) -> "星期一"
// 2. _getday(7) -> "星期天"
function _getday(value) {
  return "星期" + ["一", "二", "三", "四", "五", "六", "天"][value - 1];
}
