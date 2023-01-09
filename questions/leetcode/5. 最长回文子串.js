/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 动态规划
  let length = s.length,
    dp = new Array(length).fill().map(() => new Array(length)),
    maxlength = 0,
    begin = 0;
  for (let i = 0; i < length; ++i) {
    for (let j = i; j >= 0; --j) {
      if (s[i] === s[j] && (i - j <= 1 || dp[i - 1][j + 1])) {
        dp[i][j] = true;
        if (i - j + 1 > maxlength) {
          maxlength = i - j + 1;
          begin = j;
        }
      }
    }
  }
  return s.slice(begin, begin + maxlength);

  // 中心扩展算法
  // let start = 0, end = 0;
  // for (let i = 0; i < s.length; i++) {
  //     let len1 = expandAroundCenter(s, i, i),
  //         len2 = expandAroundCenter(s, i, i + 1),
  //         len = Math.max(len1, len2);
  //     if (len > end - start) {
  //         start = i - Math.floor((len - 1) / 2);
  //         end = i + Math.floor(len / 2);
  //     }
  // }
  // return s.slice(start, end + 1);

  // function expandAroundCenter(s, left, right) {
  //     while (left >= 0 && right < s.length && s[left] === s[right]) {
  //         --left;
  //         ++right;
  //     }
  //     return right - left - 1;
  // }
};
