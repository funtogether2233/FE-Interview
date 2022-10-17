// 描述
// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型
// 示例1
// 输入：
// '800-555-1212'
// 输出：
// true
function matchesPattern(str) {
  return /^(\d{3}-){2}\d{4}$/.test(str);
}
