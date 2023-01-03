/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 正则表达式
  // let res = s.match(/[a-zA-Z0-9]/g);
  // return res?.toString().toUpperCase()===res?.reverse().toString().toUpperCase();

  // 杂鱼方法
  // let res = [];
  // let length = s.length;
  // for (let i = 0; i < length; i++) {
  //     let tmp = s[i].charCodeAt();
  //     if ((tmp >= 48 && tmp <= 57) || (tmp>=65 && tmp <= 90) || (tmp >= 97 && tmp <= 122)) {
  //         res.push(s[i].toUpperCase());
  //     }
  // }
  // return res.toString() === res.reverse().toString();

  // 双指针
  // let res = [], length = s.length;
  // for (let i = 0; i < length; i++) {
  //     let tmp = s[i].charCodeAt();
  //     if ((tmp >= 48 && tmp <= 57) || (tmp>=65 && tmp <= 90) || (tmp >= 97 && tmp <= 122)) {
  //         res.push(s[i].toUpperCase());
  //     }
  // }
  // length = res.length;
  // let left = 0, right = length - 1;
  // while (left < right) {
  //     if (res[left] !== res[right]) {
  //         return false;
  //     }
  //     ++left;
  //     --right;
  // }
  // return true;

  // 双指针优化
  function isLetterOrDigit(c) {
    let tmp = c.charCodeAt();
    if (
      (tmp >= 48 && tmp <= 57) ||
      (tmp >= 65 && tmp <= 90) ||
      (tmp >= 97 && tmp <= 122)
    ) {
      return true;
    }
    return false;
  }
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !isLetterOrDigit(s[left])) {
      ++left;
    }
    while (left < right && !isLetterOrDigit(s[right])) {
      --right;
    }
    if (left >= right) {
      break;
    }
    if (s[left].toUpperCase() !== s[right].toUpperCase()) {
      return false;
    }
    ++left;
    --right;
  }
  return true;
};
