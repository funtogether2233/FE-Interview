function longestPalindrome(s: string): string {
  // 中心拓展法
  //   let start = 0;
  //     end = 0;
  //   for (let i = 0; i < s.length; ++i) {
  //     let len1 = expandAroundCenter(s, i, i),
  //       len2 = expandAroundCenter(s, i, i + 1),
  //       len = Math.max(len1, len2);
  //     if (len > end - start) {
  //       start = i - Math.floor((len - 1) / 2);
  //       end = i + Math.floor(len / 2);
  //     }
  //   }
  //   return s.slice(start, end + 1);

  //   function expandAroundCenter(s: string, left: number, right: number): number {
  //     while (left >= 0 && right < s.length && s[left] === s[right]) {
  //       --left, ++right;
  //     }
  //     return right - left - 1;
  //   }

  // 动态规划
  //   let dp: boolean[][] = Array.from(Array(s.length), () => new Array(s.length)),
  //     start = 0,
  //     maxLength = 0;
  //   for (let i = 0; i < s.length; ++i) {
  //     for (let j = i; j >= 0; --j) {
  //       if (s[i] === s[j] && (i - j <= 1 || dp[i - 1][j + 1])) {
  //         dp[i][j] = true;
  //         if (i - j + 1 > maxLength) {
  //           maxLength = i - j + 1;
  //           start = j;
  //         }
  //       }
  //     }
  //   }
  //   return s.slice(start, start + maxLength);

  // 100%击败，中心拓展法剪枝
  const len = s.length;
  let maxLength = 0,
    start = 0,
    i = 0;
  while (i < len) {
    let left = i,
      right = i;
    while (right < len && s[right + 1] === s[right]) {
      ++right;
    }
    i = right + 1;
    while (left >= 0 && right < len && s[left] === s[right]) {
      --left, ++right;
    }
    if (right - left - 1 > maxLength) {
      maxLength = right - left - 1;
      start = left + 1;
    }
  }
  return s.slice(start, start + maxLength);
}

export default void 0;
