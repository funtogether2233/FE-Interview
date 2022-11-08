/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //   let kh = [];
  //   const map = {
  //     "(": ")",
  //     "[": "]",
  //     "{": "}",
  //   };
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] in map) {
  //       kh.push(map[s[i]]);
  //     } else {
  //       if (kh.pop() !== s[i]) return false;
  //     }
  //   }
  //   return !kh.length;
  // 第二次写，掌握不牢，抄了官方题解一遍
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk = [];
  for (const ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return !stk.length;
};
