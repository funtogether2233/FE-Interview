/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
  let maxLength = 0;
  for (let i = 0; i < A.length; i++) {
    let len1 = expandAroundCenter(A, i, i),
      len2 = expandAroundCenter(A, i, i + 1),
      len = Math.max(len1, len2);
    maxLength = Math.max(maxLength, len);
  }
  return maxLength;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    --left;
    ++right;
  }
  return right - left - 1;
}

module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
