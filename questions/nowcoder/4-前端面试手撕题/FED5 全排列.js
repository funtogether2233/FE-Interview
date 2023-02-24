// 描述
// 请补全JavaScript代码，要求以数组的形式返回字符串参数的所有排列组合。
// 注意：
// 1. 字符串参数中的字符无重复且仅包含小写字母
// 2. 返回的排列组合数组不区分顺序
// 示例1
// 输入：
// _permute('abc')
// 输出：
// ['abc','acb','bac','bca','cab','cba']

const _permute = (string) => {
  // 补全代码
  let arr = string.split(""),
    res = [];
  backtrack(arr.length, 0);
  return res;

  function backtrack(n, first) {
    if (first === n) {
      res.push(arr.join(""));
      return;
    }
    for (let i = first; i < n; ++i) {
      [arr[first], arr[i]] = [arr[i], arr[first]];
      backtrack(arr.length, first + 1);
      [arr[first], arr[i]] = [arr[i], arr[first]];
    }
  }
};
