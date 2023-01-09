// 描述
// 请补全JavaScript函数，要求以字符串的形式输出时间戳参数所对应的"年-月-日"。
// 示例：
// 1. _date(1631159776311) -> '2021-9-9'
function _date(number) {
  return new Date(number)
    .toISOString()
    .slice(0, 10)
    .replace("-0", "-")
    .replace("-0", "-");
}
